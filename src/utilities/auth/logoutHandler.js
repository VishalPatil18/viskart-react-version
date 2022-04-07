/**
 * Welcome to @VISKart / SRC / UTILITIES / AUTH / LOGOUT_HANDLER!
 *
 * This is a utility function that loggs-out an already logged-in user
 *
 * @type - function
 * @param {function} authDispatch - Dispatch function to change the authState in authContext
 * @param {function} cartDispatch - Dispatch function to change the cartState in cartContext
 * @param {function} wishlistDispatch - Dispatch function to change the wishlistState in wishlistContext
 * @param {function} navigate - Function used to navigate from one route to another
 * @return - no return
 * @export {function} logoutHandler - The function to perform logout operation
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { toast } from "react-toastify";

const logoutHandler = (
  authDispatch,
  cartDispatch,
  wishlistDispatch,
  navigate
) => {
  localStorage.removeItem("viskartToken");
  localStorage.removeItem("viskartUser");
  authDispatch({
    type: "LOGOUT",
  });
  cartDispatch({
    type: "RESET_CART",
  });
  wishlistDispatch({
    type: "RESET_WISHLIST",
  });
  navigate("/");
  toast.success("Logout Successful!");
};

export { logoutHandler };
