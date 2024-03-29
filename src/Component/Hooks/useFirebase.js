import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';


initializeAuthentication();

const useFirebase = () => {
    const[user, setUser] = useState({});
    const[error, setError] = useState('');
   

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser ({});
            })
    }

      useEffect(() => {
        onAuthStateChanged (auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])


    return {
        user,
        error,
        signInUsingGoogle,
        logout
    }
};

export default useFirebase;
