import { Navigate } from 'react-router-dom';
import { useUserContext } from './userContext';

const ProtectedRoute = ({ children }) => {
  const {
    user: { email },
  } = useUserContext();
  if (!email) {
    console.log('here');
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
