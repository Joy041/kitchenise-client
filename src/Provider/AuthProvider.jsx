import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firevase.config';


export const AuthContext = createContext('')
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profile = (user, name, photo) => {
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    const verification = (user) => {
        return sendEmailVerification(user)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }

    }, [])

    const logout = () => {
        return signOut(auth)
    }

    
    const userInfo = {
        register,
        profile,
        verification,
        login,
        passwordReset,
        user,
        loading,
        logout
    } 

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;