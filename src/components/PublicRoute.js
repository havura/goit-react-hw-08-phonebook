import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const PublicRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const redirect = isLoggedIn;
  return redirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
