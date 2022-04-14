import React, { createContext, useContext, useState } from "react";
import AuthService from "./services/auth.service";

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState()

  const logIn = async (loginData) => {
    const logInRes = await AuthService.logInUser(loginData)
  }

  return (
    <AuthContext.Provider value={{ authData }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if(!context) throw new Error("useAuthContext must be within Provider")
  return context;
}

export { AuthContext, AuthProvider, useAuthContext };