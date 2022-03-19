import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialAuthState } from "../redux";

const AuthContext = createContext({
  authState: {},
  authDispatch: () => {},
});

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    try {
      const currentUser = localStorage.getItem("viskartUser");
      const currentToken = localStorage.getItem("viskartToken");
      authDispatch({
        type: "INITIAL_CHECK",
        payload: {
          token: currentToken,
          user: JSON.parse(currentUser),
        },
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }, [authState.token]);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
