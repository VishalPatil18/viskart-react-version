import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext({
  login: false,
  signup: false,
});

const AuthModalProvider = ({ children }) => {
  const [authModalState, setAuthModalOpen] = useState({
    login: false,
    signup: false,
  });

  const authModalHandler = (action) => {
    setAuthModalOpen(() => {
      switch (action) {
        case "OPEN":
          return { login: true, signup: false };
        case "CLOSE":
          return { login: false, signup: false };
        case "SIGNUP":
          return { login: false, signup: true };
        case "LOGIN":
          return { login: true, signup: false };
        default:
          return { login: false, signup: false };
      }
    });
  };

  return (
    <AuthModalContext.Provider value={{ authModalState, authModalHandler }}>
      {children}
    </AuthModalContext.Provider>
  );
};

const useAuthModal = () => useContext(AuthModalContext);

export { AuthModalProvider, useAuthModal };
