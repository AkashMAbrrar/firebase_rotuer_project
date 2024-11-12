import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  // set state for manage users guard
  const [user, setUser] = useState(null);

  const name = " Potato";
  // user creation
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sing in with email and password

  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign out user functionality
  const signOutUser = () => {
    return signOut(auth);
  };
  const authInfo = {
    name,
    user,
    createUser,
    singInUser,
    signOutUser,
  };

  //   manage users for guard
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe(); // clean function (unmount func)
    };
  }, []);

  //   manage users for guard (we should do operation in an useEffect hook)

  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log("currently logged user", currentUser);
  //       setUser(currentUser);
  //     } else {
  //       console.log("no user logged in yet");
  //       setUser(null);
  //     }
  //   });

  return (
    <authContext.Provider value={authInfo}>
      {/* 
    Main part who will have access to this context
     */}
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

/**
 * 1: create context with null as default
 * 2: create Provider
 * 3: set a default value with something (authInfo)
 * 4: use the authProvider in the main.jsx
 * 5: access the children inside the authProvider in the main.jsx
 * 6: export AuthContext
 * **/
