import React from "react";
import { auth } from "../firebase";
import axios from "axios";

import { dummyData } from "../../dummyData";

import { AuthProviderProps, PostData, childrenProps } from "../types";

export const AuthContext = React.createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: childrenProps) => {
  const [currentUser, setCurrentUser] = React.useState<any | null>();
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [alertStatus, setAlertStatus] = React.useState<string>("");
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);
  const [postData, setPostData] = React.useState<PostData[]>([]);

  //   const URL = import.meta.env.VITE_APP_SERVER_URL;

  function getPostData() {
    setPostData(dummyData);
  }

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

  function signup(email: string, password: string) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
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

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  }

  async function getDynamoUsers() {
    const response = await axios.get(
      "https://t23oelsfal.execute-api.us-east-1.amazonaws.com/user"
    );

    console.log(response);
  }

  React.useEffect(() => {
    // getDynamoUsers()
    getPostData();
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
        signup,
        logout,
        alertMessage,
        alertStatus,
        setAlert,
        openAlert,
        setOpenAlert,
        handleSearch,
        formatDate,
        postData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
