/**
 * Welcome to @VISKart / SRC / UTILITIES / CART / ADD_TO_CART_HANDLER!
 *
 * This is a utility function that add's an item to cart of a logged-in user
 * using the @addToCartService
 *
 * @type - function
 * @param {object} item - The item that needs to be added to the cart in database
 * @param {function} cartDispatch - Dispatch function to change the cartState in cartContext
 * @param {string} token - Auth token which verifies users auth activity
 * @return - no return
 * @export {function} addToCartHandler - The function to perform addition of item to cart action
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { toast } from "react-toastify";
import { addToCartService } from "../../services";

const addToCartHandler = async (item, cartDispatch, token) => {
  try {
    const response = await addToCartService(item, token);
    if (response.status === 201) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: {
          cart: response.data.cart,
        },
      });
      toast.info(`${item.title} added to cart`);
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addToCartHandler };
