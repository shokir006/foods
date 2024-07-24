
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, dispatch] = useState(null); 

  return (
    <AuthContext.Provider value={{ currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
