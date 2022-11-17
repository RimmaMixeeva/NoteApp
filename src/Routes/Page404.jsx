import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
function Page404() {
  const navigate = useNavigate();

  const goToMain = useCallback(() => {
    return () => navigate(`/`);
  }, [navigate]);
  return (
    <div>
      <div className="text-black  flex justify-center pb-5 pt-5 mt-56 text-2xl">
        404
      </div>
      <div className="text-black  flex justify-center pb-5 pt-5 mt-1 text-4xl">
        Page not Found
      </div>
      <span className="text-black  flex justify-center pb-5 pt-5 mt-1 text-2xl">
        go
        <button className="text-cyan-900" onClick={goToMain()}>
          Home
        </button>
      </span>
    </div>
  );
}

export default Page404;
