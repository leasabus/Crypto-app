import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth, db } from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        return setDoc(doc(db, 'users', email), {
            watchList: [],
        });
        //en este utilizo la database para almcenar un nuevo user
    };

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    return (
        <UserContext.Provider value={{ signUp, logIn, logout, user }}>
            {children}
        </UserContext.Provider>
    )

}
// para usar el context con este nombre
export const userAuth = () => {
    return useContext(UserContext);
}
