import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserContext } from '../Provider/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { loggedInUser, loading } = useContext(UserContext);
    const location = useLocation();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-infinity loading-lg text-[#00AEEF]"></span>
        </div>
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