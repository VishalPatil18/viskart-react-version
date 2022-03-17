import axios from "axios";

const signupService = (email, username, password) => {
  return axios.post("/api/auth/signup", {
    email: email,
    username: username,
    password: password,
  });
};

export { signupService };
