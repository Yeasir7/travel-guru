import React, { useEffect, useState } from "react";
import auth from "../firebase.init";
import { AuthContext } from "./AuthContext";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const createAnUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("here is current user", currentUser)
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    signWithGoogle,
    createAnUser,
    signInUser,
    logoutUser,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
