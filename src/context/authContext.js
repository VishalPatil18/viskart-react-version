/**
 * Welcome to @VISKart / SRC / CONTEXT / AUTH_CONTEXT
 *
 * This is a Context Provider for the AuthState
 *
 * @type - context-provider
 * @return {react-component} - AuthProvider component
 * @export {react-component} - AuthProvider component
 * @export {custom-hook} - useAuth()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialAuthState } from "../redux";
import { getAddressService } from "../services";

const AuthContext = createContext({
  authState: {},
  authDispatch: () => {},
});

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    (async () => {
      try {
        const currentUser = localStorage.getItem("viskartUser");
        const currentToken = localStorage.getItem("viskartToken");
        const addressesResponse =
          currentToken !== null ? await getAddressService(currentToken) : [];
        authDispatch({
          type: "INITIAL_CHECK",
          payload: {
            token: currentToken,
            user: JSON.parse(currentUser),
            addresses:
              addressesResponse.length !== 0
                ? addressesResponse.data.address
                : addressesResponse,
          },
        });
      } catch (error) {
        console.log("ERROR: ", error);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
