import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/slices/AuthSlice';

const PrivateRoute = ({ children }) => {
  const isLoggedin = useSelector(getLoggedin);
  return isLoggedin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
