import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useUserContext } from '../Components/userContext';
import { useNotesContext } from '../Components/notesContext';
function About() {
  const notesContext = useNotesContext();
  const navigate = useNavigate();
  const userContext = useUserContext();
  const handleGoToNotes = useCallback(() => {
    fetch(`http://localhost:5000/notes?userId=${userContext.user.id}`)
      .then((r) => r.json())
      .then((notes) => {
        notesContext.setNotes(notes.reverse()); //тут
        navigate('/user/notes');
      });
  }, [notesContext, userContext.user.id, navigate]);

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
