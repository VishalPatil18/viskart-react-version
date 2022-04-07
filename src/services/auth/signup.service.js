/**
 * Welcome to @VISKart / SRC / SERVICES / AUTH / SIGNUP_SERVICE
 *
 * This is a service function that performs the signup operation to get the token from backend server
 *
 * @type - function
 * @request - POST
 * @param {object} signup - The object having email, username and password of the user trying to signup
 * @return {object} - response obtained after the request is performed
 * @export {function} signupService - The service function that sign's-up a user
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const signupService = (signup) => {
  return axios.post("/api/auth/signup", signup);
};

export { signupService };
