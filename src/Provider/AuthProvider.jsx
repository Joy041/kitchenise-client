import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import app from '../firebase/firevase.config';


export const AuthContext = createContext('')
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profile = (user, name, photo) => {
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    const verification = (user) => {
        return sendEmailVerification(user)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    
    const userInfo = {
        register,
        profile,
        verification,
        login,
        passwordReset
    } 

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;