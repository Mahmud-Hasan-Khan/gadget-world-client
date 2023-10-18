import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserContext } from '../Provider/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { loggedInUser, loading } = useContext(UserContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (loggedInUser) {
        return children
    }


    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;