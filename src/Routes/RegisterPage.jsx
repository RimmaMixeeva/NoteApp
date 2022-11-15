import { useNavigate } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);
  const handleSetRepeatPassword = useCallback(
    (e) => setRepeatPassword(e.target.value),
    []
  );

  const navigate = useNavigate();
  const handleRegister = () => {
    if (password === repeatPassword) {
      const user = {
        id: Date.now().toString(),
        email: email,
        password: password,
      };
      fetch('http://localhost:5000/users', {
        method: 'Post',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(() => {
          navigate('/login');
        })
        .catch(() => {
          alert('Bad');
        });
    } else {
      alert('Wrong Password');
    }
  };
  return (
    <div className="max-w-sm mx-auto pb-5 pt-5 mt-5 ">
      <div className="text-black  flex justify-center pb-5 pt-5 mt-8 text-3xl font-semibold">
        Sign up
      </div>

      <div className="text-black pb-5 pt-5 mt-3 text-3xl">
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleSetEmail}
            required
          />
        </div>
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleSetPassword}
            required
          />
        </div>
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
            onChange={handleSetRepeatPassword}
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="register"
            onClick={handleRegister}
            className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60"
          />
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
