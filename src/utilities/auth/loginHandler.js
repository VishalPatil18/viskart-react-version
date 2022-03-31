import { toast } from "react-toastify";
import {
  loginService,
  cartService,
  wishlistService,
  getAddressService,
} from "../services";

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
