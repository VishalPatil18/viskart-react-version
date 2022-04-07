/**
 * Welcome to @VISKart / SRC / SERVICES / WISHLIST / ADD_TO_WISHLIST_SERVICE
 *
 * This is a service function that adds a product to wishlist of a user in the backend server
 *
 * @type - function
 * @request - POST
 * @param {object} product - The product that needs to be added to wishlist
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} addToWishlistService - The service function that adds a product to wishlist on backend server
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const addToWishlistService = (product, token) => {
  return axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: { authorization: token },
    }
  );
};

export { addToWishlistService };
