/**
 * Welcome to @VISKart / SRC / SERVICES / CART / CART_SERVICE
 *
 * This is a service function that gets the items from the cart on the backend server
 *
 * @type - function
 * @request - GET
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} cartService - The service function that gets the items in cart of the user
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const cartService = (token) => {
  return axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
};

export { cartService };
