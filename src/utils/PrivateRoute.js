import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  const userPermissionFromStorage = useSelector(
    (state) => state.user.userPermission
  );

  return userPermissionFromStorage ? children : <Navigate to='/login' />;
}

export default PrivateRoute;
