import { NavLink } from 'react-router-dom';
import { useNotesContext } from '../Components/notesContext';
import { useUserContext } from '../Components/userContext';
function Notes() {
  const notesContext = useNotesContext();
  const userContext = useUserContext();
  const handleEdit = (e) => {};
  const handleDelete = (e) => {
    fetch(`http://localhost:5000/notes/${e.currentTarget.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    fetch(`http://localhost:5000/notes?userId=${userContext.user.id}`)
      .then((r) => r.json())
      .then((notes) => {
        notesContext.setNotes(notes.reverse()); ///////тут
      });
  };
  return (
    <div>
      <div className="text-black  flex justify-center pb-5 pt-5 mt-4 text-3xl font-semibold">
        Notes
      </div>
      <button className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60 text-2xl">
        <NavLink to="/user/createnote">Add new note</NavLink>
      </button>
      {notesContext.notes.map((note) => (
        <div
          className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 mb-3 flex justify-between mx-auto w-4/5 text-2xl"
          key={note.id}
        >
          <span className="text-black font-semibold">{note.title} </span>
          {note.createdAt}
          <div>
            <button
              id={note.id}
              className="pr-3 pl-3 bg-green-600"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              id={note.id}
              className="pl-3 pr-3 ml-5 bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Notes;
