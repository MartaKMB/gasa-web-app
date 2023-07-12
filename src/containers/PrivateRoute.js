import { Navigate } from 'react-router-dom';

// const permission = true;

function PrivateRoute({ children }) {
    const userPermissionFromStorage = JSON.parse(localStorage.getItem('hasUserPermission'));
    return (
        userPermissionFromStorage ? children : <Navigate to="/login" />
    );
}

export default PrivateRoute;