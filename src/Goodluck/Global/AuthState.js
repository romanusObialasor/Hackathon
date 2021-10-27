import React, { createContext, useEffect, useState } from "react";
import { app } from "../base";

export const AuthProvider = createContext();

export const AuthState = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    app.auth().onAuthStateChanged((el) => {
      setCurrentUser(el);
    });
  }, []);

  return (
    <AuthProvider.Provider value={{ currentUser }}>
      {children}
    </AuthProvider.Provider>
  );
};
