import { NavLink } from 'react-router-dom';
function Notes() {
  return (
    <div>
      <div className="text-black  flex justify-center pb-5 pt-5 mt-20 text-3xl font-semibold">
        Notes
      </div>
      <button className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60 text-2xl">
        <NavLink
          to="/user/createnote" //тут надо будет заменить на путь кописанию нашего юзера
        >
          Add new note
        </NavLink>
      </button>
    </div>
  );
}
export default Notes;
