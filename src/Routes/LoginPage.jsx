import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Components/userContext';
import { useNotesContext } from '../Components/notesContext';

function LoginPage() {
  const userContext = useUserContext();
  const notesContext = useNotesContext();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const handleLogin = useCallback(() => {
    fetch(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          userContext.setUser(users[0]);
          navigate('/user');
        } else {
          alert('User is invalid');
        }
      });
    fetch(`http://localhost:5000/notes?userId=${userContext.user.id}`)
      .then((r) => r.json())
      .then((notes) => {
        //тут проблема бесконечного рендера
        notesContext.setNotes(notes);
      });
  }, [email, navigate, password, userContext, notesContext]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/users')
  //     .then((r) => r.json())
  //     .then(console.log());
  // }, []);
  // useEffect(() => {
  //   if (userContext.user?.email) navigate('/user');
  // }, [navigate, userContext.user]);
  return (
    <div className="max-w-sm mx-auto pb-5 pt-5 mt-5 ">
      <div className="text-black  flex justify-center pb-5 pt-5 mt-8 text-3xl font-semibold">
        Log in
      </div>
      <div className="text-black pb-5 pt-5 mt-3 text-3xl">
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleSetEmail}
          />
        </div>
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleSetPassword}
          />
        </div>
        <div>
          <input
            onClick={handleLogin}
            type="submit"
            value="login"
            className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
