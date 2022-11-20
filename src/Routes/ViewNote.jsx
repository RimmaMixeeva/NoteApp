import { useNoteContext } from '../Components/noteContext';
import { useNotesContext } from '../Components/notesContext';
import { useUserContext } from '../Components/userContext';
import { useNavigate } from 'react-router-dom';
function ViewNote() {
  const noteContext = useNoteContext();
  const notesContext = useNotesContext();
  const userContext = useUserContext();
  const handleDelete = () => {
    if (
      window.confirm(
        `ВЫ ТОЧНО ХОТИТЕ УДАЛИТЬ ЗАМЕТКУ ${noteContext.note[0].id}?`
      )
    ) {
      fetch(`http://localhost:5000/notes/${noteContext.note[0].id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      fetch(`http://localhost:5000/notes?userId=${userContext.user.id}`)
        .then((r) => r.json())
        .then((notes) => {
          notesContext.setNotes(notes.reverse());
        });
      navigate('/user/notes');
    }
  };
  const handleEdit = () => {
    navigate('/user/editnote');
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/user/notes');
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
          View the note
        </div>
        <button
          className=" bg-green-600 pt-3 ml-8 pb-3 pl-9 pr-9 mr-8 "
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className=" bg-red-600 pt-3 pb-3 pl-9 pr-9 mr-8 "
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div className="text-black pb-5 pt-5 mt-3 text-3xl w-full ">
        <div>
          <textarea
            maxLength="30"
            className="bg-gray-300 pt-3 pl-3 mt-5 w-full"
            type="text"
            placeholder="Name"
            required
            value={noteContext.note[0].title}
          ></textarea>
        </div>
        <div>
          <textarea
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5 w-full h-72"
            type="text"
            placeholder="Node text..."
            required
            value={noteContext.note[0].body}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ViewNote;
