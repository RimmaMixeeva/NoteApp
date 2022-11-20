import { Outlet, NavLink } from 'react-router-dom';
import { useCallback } from 'react';
import { useUserContext } from '../Components/userContext';
import { useNotesContext } from '../Components/notesContext';
function UserLayout() {
  const userContext = useUserContext();
  const notesContext = useNotesContext();
  const handleNotes = useCallback(() => {
    fetch(`http://localhost:5000/notes?userId=${userContext.user.id}`)
      .then((r) => r.json())
      .then((notes) => {
        notesContext.setNotes(notes.reverse()); //тут
      });
  }, [notesContext, userContext.user.id]);
  const { user } = useUserContext();
  const handleLogout = () => {
    user.setUser({ email: '' });
  };
  return (
    <div>
      <header className="bg-neutral-100 flex justify-around pb-5 pt-5 text-xl">
        <div>Welcome, {user.email}</div>
        <div className="text-violet-900 flex gap-14 justify-center text-xl">
          <NavLink
            to="/user/about"
            className={({ isActive }) => (isActive ? 'link-active' : '')}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/user/notes"
            className={({ isActive }) => (isActive ? 'link-active' : '')}
            onClick={handleNotes}
          >
            NOTES
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link-active' : '')}
            onClick={handleLogout}
          >
            LOG OUT
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
