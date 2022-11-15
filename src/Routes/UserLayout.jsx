import { Outlet, NavLink } from 'react-router-dom';
import { useUserContext } from '../Components/userContext';
function UserLayout() {
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
            to="/user/about" //тут надо будет заменить на путь кописанию нашего юзера
            className={({ isActive }) => (isActive ? 'link-active' : '')}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/user/notes" //тут надо будет заменить на путь к заметкам нашего юзера
            className={({ isActive }) => (isActive ? 'link-active' : '')}
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
