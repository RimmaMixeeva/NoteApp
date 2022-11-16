import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Routes/LoginPage';
import RegisterPage from './Routes/RegisterPage';
import Layout from './Routes/Layout';
import Page404 from './Routes/Page404';
import About from './Routes/About';
import UserLayout from './Routes/UserLayout';
import Notes from './Routes/Notes';
import CreateNote from './Routes/CreateNote';
import UserContextProvider from './Components/userContext';
import NoteContextProvider from './Components/noteContext';
import ProtectedRoute from './Components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        index: true,
        path: '/',
        element: (
          <div className="text-black  flex justify-center pb-5 pt-5 mt-56 text-3xl font-semibold">
            Welcome to Note App
          </div>
        ),
      },
    ],
  },
  {
    path: '/user',
    element: (
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'notes',
        element: <Notes />,
      },
      {
        path: 'createnote',
        element: <CreateNote />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
function App() {
  return (
    <UserContextProvider>
      <NoteContextProvider>
        <RouterProvider router={router} />
      </NoteContextProvider>
    </UserContextProvider>
  );
}

export default App;
