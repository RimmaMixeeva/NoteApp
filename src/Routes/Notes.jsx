import { NavLink } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useUserContext } from '../Components/userContext';
import { useNoteContext } from '../Components/noteContext';
function Notes() {
  const userContext = useUserContext();
  const noteContext = useNoteContext();

  fetch(`http://localhost:5000/notes?userId=${userContext.user.id}`)
    .then((r) => r.json())
    .then((notes) => {
      console.log(notes);
    });
  return (
    <div>
      <div className="text-black  flex justify-center pb-5 pt-5 mt-20 text-3xl font-semibold">
        Notes
      </div>
      <div>dsdsd</div>
      <button className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60 text-2xl">
        <NavLink to="/user/createnote">Add new note</NavLink>
      </button>
    </div>
  );
}
export default Notes;
