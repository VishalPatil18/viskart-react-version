/**
 * Welcome to @VISKart / SRC / SERVICES / WISHLIST / WISHLIST_SERVICE
 *
 * This is a service function that gets all products in wishlist of a user in the backend server
 *
 * @type - function
 * @request - GET
 * @param {string} token - Auth token which verifies users auth activity
 * @return {object} - response obtained after the request is performed
 * @export {function} wishlistService - The service function that gets all products in wishlist of
 *                                      user from the backend server
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const wishlistService = (token) => {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  });
};

export { wishlistService };
