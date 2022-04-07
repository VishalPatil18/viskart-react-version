/**
 * Welcome to @VISKart / SRC / SERVICES / AUTH / LOGIN_SERVICE
 *
 * This is a service function that performs the login operation to get the token from backend server
 *
 * @type - function
 * @request - POST
 * @param {object} login - The object login having email and password of the user trying to login
 * @return {object} - response obtained after the request is performed
 * @export {function} loginService - The service function that loggs-in a user
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const loginService = (login) => {
  return axios.post("/api/auth/login", login);
};

export { loginService };
