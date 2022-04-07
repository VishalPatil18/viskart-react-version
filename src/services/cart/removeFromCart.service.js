/**
 * Welcome to @VISKart / SRC / SERVICES / CART / REMOVE_FROM_CART_SERVICE
 *
 * This is a service function that removes an item from the cart on the backend server
 *
 * @type - function
 * @request - DELETE
 * @param {object} item - The item that needs to be removed from the cart
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} removeFromCartService - The service function that removes an item from the cart of the user
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const removeFromCartService = (item, token) => {
  return axios.delete(`/api/user/cart/${item._id}`, {
    headers: { authorization: token },
  });
};

export { removeFromCartService };
