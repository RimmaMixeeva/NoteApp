import { NavLink } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useUserContext } from '../Components/userContext';
function Notes() {
  const userContext = useUserContext();
  const [notes, setNotes] = useState([]);

  useMemo(() => {
    fetch(`http://localhost:5000/notes?userId=${userContext.user.id}`)
      .then((r) => r.json())
      .then((notes) => {
        setNotes(notes);
      });
  }, [userContext.user.id]);

  return (
    <div>
      <div className="text-black  flex justify-center pb-5 pt-5 mt-20 text-3xl font-semibold">
        Notes
      </div>
      {notes.map((note, index) => (
        <div key={index}>{note.title}</div>
      ))}
      <button className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60 text-2xl">
        <NavLink to="/user/createnote">Add new note</NavLink>
      </button>
    </div>
  );
}
export default Notes;
