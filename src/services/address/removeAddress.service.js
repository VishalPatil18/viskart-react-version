/**
 * Welcome to @VISKart / SRC / SERVICES / ADDRESS / REMOVE_ADDRESS_SERVICE
 *
 * This is a service function that performs a network request to remove the address from the backend server
 *
 * @type - function
 * @request - DELETE
 * @param {string} addressId - The id of the address to be removed from the backend server
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} removeAddressService - The service function that removes an address from the backend server
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const removeAddressService = (addressId, token) => {
  return axios.delete(`api/user/address/${addressId}`, {
    headers: {
      authorization: token,
    },
  });
};

export { removeAddressService };
