import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-app/firebase-config";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);
  // console.log(userInfo);
  const value = { userInfo, setUserInfo };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === "undefined") {
    throw new Error("error");
  }
  return context;
};

export { AuthProvider, useAuth };
