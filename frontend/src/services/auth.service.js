import api from "../api/axios"
import {END_POINTS} from "../api/endpoint"
export const AuthService = {
  Login : (credentials) => {
    return api.post(END_POINTS.AUTH.LOGIN,credentials);
  },
  Signup : (user) => {
    return api.post(END_POINTS.AUTH.SIGNUP,user);
  },
  Logout : () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
  },
}

