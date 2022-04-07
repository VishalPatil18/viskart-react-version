/**
 * Welcome to @VISKart / SRC / UTILITIES / WISHLIST / ADD_TO_WISHLIST_HANDLER!
 *
 * This is a utility function that adds a new item to wishlist using the @addToWishlistService
 *
 * @type - function
 * @param {object} item - The item that needs to be added to wishlist
 * @param {function} wishlistDispatch - Dispatch function to change the wishlistState in wishlistContext
 * @param {string} token - Auth token which verifies users auth activity
 * @return - no return
 * @export {function} addToWishlistHandler - The function that performs the add to wishlist action
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { toast } from "react-toastify";
import { addToWishlistService } from "../../services";

const addToWishlistHandler = async (item, wishlistDispatch, token) => {
  try {
    const response = await addToWishlistService(item, token);
    if (response.status === 201) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: {
          wishlist: response.data.wishlist,
        },
      });
      toast.info(`${item.title} added to wishlist`);
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addToWishlistHandler };
