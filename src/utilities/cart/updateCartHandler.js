/**
 * Welcome to @VISKart / SRC / UTILITIES / CART / UPDATE_CART_HANDLER!
 *
 * This is a utility function that updates the quantity of an already existing item in the cart of
 * a logged-in user using the @updateCartService
 *
 * @type - function
 * @param {object} item - The item that needs to be updated from the cart in database
 * @param {function} cartDispatch - Dispatch function to change the cartState in cartContext
 * @param {string} token - Auth token which verifies users auth activity
 * @param {string} action - The action to perform i.e. `INCREMENT` or `DECREMENT` for quantity of the item
 * @param {function} setBtnDisabled - State function to toggle the  `DISABLED` state for the `+`, `-` buttons
 * @return - no return
 * @export {function} updateCartHandler - The function to perform updation of an item from the cart action
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { toast } from "react-toastify";
import { updateCartService } from "../../services";

const updateCartHandler = async (
  item,
  cartDispatch,
  token,
  action,
  setBtnDisabled
) => {
  setBtnDisabled(true);
  try {
    const response = await updateCartService(item, token, action);
    if (response.status === 200) {
      cartDispatch({
        type: "UPDATE_CART",
        payload: {
          cart: response.data.cart,
        },
      });
      setBtnDisabled(false);
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    setBtnDisabled(false);
    toast.error(error.response.data.errors[0]);
  }
};

export { updateCartHandler };
