import { useContext } from 'react';
import { UserContext } from '../context/context';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);

  if (login === null) return null;
  return login ? children : <Navigate to='/login' replace />;
};

export default ProtectedRoute;
