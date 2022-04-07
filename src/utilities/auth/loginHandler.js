/**
 * Welcome to @VISKart / SRC / UTILITIES / AUTH / LOGIN_HANDLER!
 *
 * This is a utility function that loggs-in an already existing user using the @loginService
 *
 * @type - function
 * @param {object} event - The event which triggered the login action
 * @param {object} login - The object having `email` and `password` of the user trying to login
 * @param {function} authDispatch - Dispatch function to change the authState in authContext
 * @param {function} cartDispatch - Dispatch function to change the cartState in cartContext
 * @param {function} wishlistDispatch - Dispatch function to change the wishlistState in wishlistContext
 * @param {function} authModalHandler - Function to toggle the authModal
 * @param {function} setLoader - Function to activate and deactivate loaders
 * @param {function} navigate - Function used to navigate from one route to another
 * @return - no return
 * @export {function} loginHandler - The function to perform login operation
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { toast } from "react-toastify";
import {
  loginService,
  cartService,
  wishlistService,
  getAddressService,
} from "../../services";

const loginHandler = async (
  event,
  login,
  authDispatch,
  cartDispatch,
  wishlistDispatch,
  authModalHandler,
  setLoader,
  navigate
) => {
  event.preventDefault();
  authModalHandler("CLOSE");
  setLoader(true, "Logging In");
  try {
    const response = await loginService(login);
    if (response.status === 200) {
      localStorage.setItem("viskartToken", response.data.encodedToken);
      localStorage.setItem(
        "viskartUser",
        JSON.stringify(response.data.foundUser)
      );
      const addressResponse = await getAddressService(
        response.data.encodedToken
      );
      authDispatch({
        type: "LOGIN",
        payload: {
          token: response.data.encodedToken,
          user: response.data.foundUser,
          addresses: addressResponse.data.address,
        },
      });
      const cartResponse = await cartService(response.data.encodedToken);
      cartDispatch({
        type: "INITIAL_CART",
        payload: { cart: cartResponse.data.cart },
      });
      const wishlistResponse = await wishlistService(
        response.data.encodedToken
      );
      wishlistDispatch({
        type: "INITIAL_WISHLIST",
        payload: { wishlist: wishlistResponse.data.wishlist },
      });
      setLoader(false, "I'm Working");
      navigate("/");
      toast.success("Login Successful!");
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    setLoader(false, "I'm Working");
    toast.error(error.response.data.errors[0]);
  }
};

export { loginHandler };
