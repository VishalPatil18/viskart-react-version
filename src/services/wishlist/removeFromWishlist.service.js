/**
 * Welcome to @VISKart / SRC / SERVICES / WISHLIST / REMOVE_FROM_WISHLIST_SERVICE
 *
 * This is a service function that removes a product from wishlist of a user in the backend server
 *
 * @type - function
 * @request - DELETE
 * @param {object} item - The item that needs to be removed from wishlist
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} removeFromWishlistService - The service function that removes a product from
 *                                                wishlist on backend server
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const removeFromWishlistService = (item, token) => {
  return axios.delete(`/api/user/wishlist/${item._id}`, {
    headers: { authorization: token },
  });
};

export { removeFromWishlistService };
