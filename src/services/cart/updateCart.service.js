/**
 * Welcome to @VISKart / SRC / SERVICES / CART / UPDATE_CART_SERVICE
 *
 * This is a service function that updates the quantity of an item in cart on the backend server
 *
 * @type - function
 * @request - POST
 * @param {object} item - The item that needs to be updated in the cart
 * @param {string} token - Auth token which verifies users auth activity
 * @param {string} action - The action to be performed i.e. `INCREMENT` or `DECREMENT`
 * @return {object} - response obtained after the request is performed
 * @export {function} updateCartService - The service function that updates the quantity of an
 *                                        item from the cart of the user
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const updateCartService = (item, token, action) => {
  return axios.post(
    `/api/user/cart/${item._id}`,
    { action: { type: action } },
    {
      headers: { authorization: token },
    }
  );
};

export { updateCartService };
