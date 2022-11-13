import { Outlet, NavLink } from 'react-router-dom';
function Layout() {
  return (
    <div>
      <header className="text-violet-900 bg-neutral-100 flex gap-14 justify-center pb-5 pt-5 text-xl ">
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? 'link-active' : '')}
        >
          LOG IN
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? 'link-active' : '')}
        >
          REGISTER
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
