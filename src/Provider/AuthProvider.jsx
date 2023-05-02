import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firevase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const userInfo = {

    }

    return (
       <AuthContext.Provider value={userInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;