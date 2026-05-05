/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { AuthService } from "../services/auth.service";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (credentials) => {
    setLoading(false)
    AuthService.Login(credentials)
      .then((res) => {
        setUser(res);
        localStorage.setItem("userData", JSON.stringify(res.user));
        localStorage.setItem("token", JSON.stringify(res.token));
      })
      .catch((error) => console.log(error));
  };

  const signup = (credentials) => {
    setLoading(false)
    AuthService.Signup(credentials)
      .then((res) => {
        setUser(res);
        localStorage.setItem("userData", JSON.stringify(res.user));
        localStorage.setItem("token", JSON.stringify(res.token));
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    setUser(null);
    AuthService.Logout();
  };

  return {
    user,
    loading,
    login,
    signup,
    logout,
  };
};
