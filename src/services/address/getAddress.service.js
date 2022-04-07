/**
 * Welcome to @VISKart / SRC / SERVICES / ADDRESS / GET_ADDRESS_SERVICE
 *
 * This is a service function that performs a network request to get the addresses from the database
 *
 * @type - function
 * @request - GET
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} getAddressService - The service function that fetches all address from the backend server
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const getAddressService = (token) => {
  return axios.get("api/user/address", {
    headers: {
      authorization: token,
    },
  });
};

export { getAddressService };
