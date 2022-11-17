import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Components/userContext';
function About() {
  const navigate = useNavigate();
  const userContext = useUserContext();
  const handleGoToNotes = () => {
    navigate('/user/notes');
  };

  return (
    <div>
      <div className="text-black  flex justify-center pb-5 pt-5 text-3xl font-semibold mt-20">
        About me
      </div>
      <div className="text-black  flex justify-center pb-5 pt-6 mt-3 text-3xl">
        Email: {userContext.user.email}
      </div>
      <div className="text-black  flex justify-center pb-5 pt-2 text-3xl">
        Date sign up: {userContext.user.date}
      </div>
      <button
        className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60 text-2xl"
        onClick={handleGoToNotes}
      >
        Go to notes
      </button>
    </div>
  );
}

export default About;
