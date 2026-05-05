import { createContext } from "react";
import { useAuth} from "../hooks/auth.hook";

export const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={ auth }>
      {children}
    </AuthContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
