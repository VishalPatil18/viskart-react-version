const modalHandler = (action, setAuthModalOpen) => {
  setAuthModalOpen(() => {
    switch (action) {
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

export { modalHandler };
