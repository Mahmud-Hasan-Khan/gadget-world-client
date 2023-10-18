import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const UserContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email & password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with email & password
    const loginWithEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // get the currently sign in user, User observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setLoggedInUser(currentUser)
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    // Log Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        loginWithEmailPassword,
        signInWithGoogle,
        logOut,
        loggedInUser,
        loading,
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    )
};

AuthProviders.propTypes = {
    children: PropTypes.node
}

export default AuthProviders;