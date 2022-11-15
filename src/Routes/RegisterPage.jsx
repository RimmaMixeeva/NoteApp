import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const handleRegister = () => {
    const user = {
      id: Date.now().toString(),
      email: '123',
      password: '1234',
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
            required
          />
        </div>
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
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
