import React from "react";
import { auth } from "../firebase";
import axios from "axios";

import { AuthProviderProps, childrenProps } from "../types";

export const AuthContext = React.createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: childrenProps) => {
  const [currentUser, setCurrentUser] = React.useState<any | null>();
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [alertStatus, setAlertStatus] = React.useState<string>("");
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);

  //   const URL = import.meta.env.VITE_APP_SERVER_URL;

  function setAlert(aStatus: string, aMessage: string) {
    setOpenAlert(true);
    setAlertStatus(aStatus);
    setAlertMessage(aMessage);
  }

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(error.message);
      setAlert("failed", "Wrong Email or Password ");
    });
  }

  function logout() {
    return auth.signOut();
  }

  function handleSearch() {
    console.log("searching");
  }

  function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        alertMessage,
        alertStatus,
        setAlert,
        openAlert,
        setOpenAlert,
        handleSearch,
        formatDate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
