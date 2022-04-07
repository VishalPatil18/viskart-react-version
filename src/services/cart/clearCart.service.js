/**
 * Welcome to @VISKart / SRC / SERVICES / CART / CLEAR_CART_SERVICE
 *
 * This is a service function that clears the cart by removing all items on the backend server
 *
 * @type - function
 * @request - DELETE
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} clearCartService - The service function that clears the cart of the user
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const clearCartService = (token) => {
  return axios.delete("/api/user/cart/all", {
    headers: { authorization: token },
  });
};

export { clearCartService };
