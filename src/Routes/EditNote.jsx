import { useCallback, useState } from 'react';
import { useNoteContext } from '../Components/noteContext';
import { useNavigate } from 'react-router-dom';

function EditNote() {
  const navigate = useNavigate();
  const noteContext = useNoteContext();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const handleText = useCallback((e) => setText(e.target.value), []);
  const handleTitle = useCallback((e) => setTitle(e.target.value), []);
  const handleBack = () => {
    delete localStorage.note;
    navigate('/user/notes');
  };

  console.log(noteContext.note);
  /* const handleEdit = () => {
    const note = {
      id: noteContext.note.id,
      userId: noteContext.note.userId,
      title: title,
      body: text,
      createdAt: noteContext.note.createdAt,
    };
    fetch(
      `http://localhost:5000/notes/:userId=${noteContext.note[0].userId}&id=${noteContext.note[0].id}`,
      {
        mode: 'no-cors',
        method: 'Patch',
        body: JSON.stringify(note),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((r) => r.json())
      .then((note) => {
        // noteContext.setNote(note);
      });
    delete localStorage.note;
    navigate('/user/notes');
  };*/
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
            className="bg-gray-300 pt-3 pl-3 mt-5 w-full"
            type="text"
            placeholder="Name"
            onChange={handleTitle}
            required
          >
            {noteContext.note[0].title}
          </textarea>
        </div>
        noteContext.note[0].body
        <div>
          <textarea
            onChange={handleText}
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5 h-72 w-full"
            type="text"
            placeholder="Node text..."
            required
          >
            {noteContext.note[0].body}
          </textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Save"
            //onClick={handleEdit}
            className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60"
          />
        </div>
      </div>
    </div>
  );
}

export default EditNote;
