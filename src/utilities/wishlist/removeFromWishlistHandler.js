/**
 * Welcome to @VISKart / SRC / UTILITIES / WISHLIST / REMOVE_FROM_WISHLIST_HANDLER!
 *
 * This is a utility function that removes an already existing item from wishlist
 * using the @removeFromWishlistService
 *
 * @type - function
 * @param {object} item - The item that needs to be removed from wishlist
 * @param {function} wishlistDispatch - Dispatch function to change the wishlistState in wishlistContext
 * @param {string} token - Auth token which verifies users auth activity
 * @return - no return
 * @export {function} removeFromWishlistHandler - The function that performs the remove item from wishlist action
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { removeFromWishlistService } from "../../services";

const removeFromWishlistHandler = async (item, wishlistDispatch, token) => {
  try {
    const response = await removeFromWishlistService(item, token);
    if (response.status === 200) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: {
          wishlist: response.data.wishlist,
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromWishlistHandler };
