/**
 * Welcome to @VISKart / SRC / UTILITIES / CART / REMOVE_FROM_CART_HANDLER!
 *
 * This is a utility function that remove's an already existing item from the cart of
 * a logged-in user using the @removeFromCartService
 *
 * @type - function
 * @param {object} item - The item that needs to be removed from the cart in database
 * @param {function} cartDispatch - Dispatch function to change the cartState in cartContext
 * @param {string} token - Auth token which verifies users auth activity
 * @return - no return
 * @export {function} removeFromCartHandler - The function to perform removal of an item from the cart action
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { removeFromCartService } from "../../services";

const removeFromCartHandler = async (item, cartDispatch, token) => {
  try {
    const response = await removeFromCartService(item, token);
    if (response.status === 200) {
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          cart: response.data.cart,
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromCartHandler };
