import { NavLink } from 'react-router-dom';
import { useNotesContext } from '../Components/notesContext';
function Notes() {
  const notesContext = useNotesContext();
  const handleDelete = (e) => {
    console.log(e.currentTarget.id);
    fetch(`https//localhost:3000/notes/id=${e.currentTarget.id}`, {
      metod: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <div>
      <div className="text-black  flex justify-center pb-5 pt-5 mt-20 text-3xl font-semibold">
        Notes
      </div>
      <button className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60 text-2xl">
        <NavLink to="/user/createnote">Add new note</NavLink>
      </button>
      {notesContext.notes.map((note, index) => (
        <div
          className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-between mx-auto w-4/5 text-2xl"
          key={note.id}
        >
          {note.title} {note.createdAt}
          <div>
            <button className="pr-3 pl-3 bg-green-600">Edit</button>
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
