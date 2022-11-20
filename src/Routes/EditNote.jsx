import { useState } from 'react';
import { useNoteContext } from '../Components/noteContext';
import { useNotesContext } from '../Components/notesContext';
import { useUserContext } from '../Components/userContext';
import { useNavigate } from 'react-router-dom';
function EditNote() {
  const navigate = useNavigate();
  const noteContext = useNoteContext();
  const userContext = useUserContext();
  const notesContext = useNotesContext();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const handleText = (e) => {
    const note = {
      id: noteContext.note[0].id,
      userId: noteContext.note[0].userId,
      title: noteContext.note[0].title,
      body: e.target.value,
      createdAt: noteContext.note[0].createdAt,
    };
    noteContext.setNote([note]);
  };
  const handleTitle = (e) => {
    const note = {
      id: noteContext.note[0].id,
      userId: noteContext.note[0].userId,
      title: e.target.value,
      body: noteContext.note[0].body,
      createdAt: noteContext.note[0].createdAt,
    };
    noteContext.setNote([note]);
  };

  const handleBack = () => {
    navigate('/user/notes');
  };
  const handleEdit = () => {
    if (noteContext.note[0].title !== '') {
      fetch(`http://localhost:5000/notes/${noteContext.note[0].id}`, {
        method: 'Put',
        body: JSON.stringify(noteContext.note[0]),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(() => {
          navigate('/user/notes');
        })
        .catch(() => {
          alert('Bad');
        });
      fetch(`http://localhost:5000/notes?userId=${userContext.user.id}`)
        .then((r) => r.json())
        .then((notes) => {
          notesContext.setNotes(notes.reverse()); //тут
        });
    } else {
      alert('Enter the title');
    }
  };
  return (
    <div className="w-5/6 mt-20 flex flex-col justify-center mx-auto">
      <div className="text-black pb-5 flex flex-row justify-center pt-5 text-3xl">
        <button
          className="bg-gray-300 pt-3 pb-3 pl-9 pr-9 mr-8 "
          onClick={handleBack}
        >
          Back
        </button>
        <div className="pt-3 flex justify-center font-semibold">
          Edit the note
        </div>
      </div>
      <div className="text-black pb-5 pt-5 mt-3 text-3xl w-full ">
        <div>
          <textarea
            maxLength="30"
            className="bg-gray-300 pt-3 pl-3 mt-5 w-full"
            type="text"
            placeholder="Name"
            onChange={handleTitle}
            required
            value={noteContext.note[0].title}
          ></textarea>
        </div>
        <div>
          <textarea
            onChange={handleText}
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5 w-full h-72"
            type="text"
            placeholder="Node text..."
            required
            value={noteContext.note[0].body}
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Edit"
            onClick={handleEdit}
            className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60"
          />
        </div>
      </div>
    </div>
  );
}

export default EditNote;
