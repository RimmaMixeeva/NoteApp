import { useCallback, useState } from 'react';
import { useUserContext } from '../Components/userContext';
import { useNotesContext } from '../Components/notesContext';
import { useNavigate } from 'react-router-dom';
function CreateNote() {
  const navigate = useNavigate();
  const userContext = useUserContext();
  const notesContext = useNotesContext();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const handleText = useCallback((e) => setText(e.target.value), []);
  const handleTitle = useCallback((e) => setTitle(e.target.value), []);
  const handleBack = () => {
    navigate('/user/notes');
  };
  const handleCreate = () => {
    if (title !== '') {
      const note = {
        id: Date.now().toString(),
        userId: userContext.user.id,
        title: title,
        body: text,
        createdAt: Date(),
      };
      fetch('http://localhost:5000/notes', {
        method: 'Post',
        body: JSON.stringify(note),
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
          Create new note
        </div>
      </div>
      <div className="text-black pb-5 pt-5 mt-3 text-3xl w-full ">
        <div>
          <textarea
            maxlength="30"
            className="bg-gray-300 pt-3 pl-3 mt-5 w-full"
            type="text"
            placeholder="Name"
            onChange={handleTitle}
            required
          ></textarea>
        </div>
        <div>
          <textarea
            onChange={handleText}
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5 w-full h-72"
            type="text"
            placeholder="Node text..."
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="Create"
            onClick={handleCreate}
            className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
