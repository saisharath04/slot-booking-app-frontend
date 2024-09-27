import React, { createContext, useState } from "react";
import {
  AuthContextProps,
  AuthProviderProps,
  LoginFunctionProps,
  User,
} from "./AuthTypes";

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const login = ({ token, ...userDetails }: LoginFunctionProps) => {
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setToken(token);
    setUser(userDetails);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userDetails");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
