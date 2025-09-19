import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);



//---------------- for create user----------------
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
// ----------------for SignIn user-------------------
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // --------------SignIn with Google-------------------

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
     // -----------for sign Out----------------------

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    //--------------for Observer/  -------------------

    useEffect (()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log('user in the auth state change', currentUser)
        })
        return()=>{
            unSubscribe();
        }
    }, [])

   

    const authInfo= {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser, 
        signInWithGoogle

    }

  return (
   <AuthContext value={authInfo}>
        {children}
   </AuthContext>
  );
};

export default AuthProvider;