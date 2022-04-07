/**
 * Welcome to @VISKart / SRC / SERVICES / ADDRESS / GET_NEW_ADDRESS_SERVICE
 *
 * This is a service function that performs a network request to add a new address to the database
 *
 * @type - function
 * @request - POST
 * @param {object} address - The address that needs to be added
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} addNewAddressService - The service function that performs the addition of new address
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const addNewAddressService = (address, token) => {
  return axios.post(
    "api/user/address",
    {
      address,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export { addNewAddressService };
