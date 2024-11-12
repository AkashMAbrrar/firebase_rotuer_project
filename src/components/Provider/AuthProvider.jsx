import React, { createContext } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Firebase",
  };

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
