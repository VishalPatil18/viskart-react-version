import { loginService, cartService, wishlistService } from "../services";

const loginHandler = async (
  event,
  login,
  authDispatch,
  cartDispatch,
  wishlistDispatch,
  authModalHandler,
  navigate
) => {
  try {
    event.preventDefault();
    const response = await loginService(login);
    if (response.status === 200) {
      localStorage.setItem("viskartToken", response.data.encodedToken);
      localStorage.setItem(
        "viskartUser",
        JSON.stringify(response.data.foundUser)
      );
      authDispatch({
        type: "LOGIN",
        payload: {
          token: response.data.encodedToken,
          user: response.data.foundUser,
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
      authModalHandler("CLOSE");
      alert("Login Successful");
      navigate("/");
    }
    if (response.status === 404) {
      throw new Error(
        "The email entered is not Registered. Please Enter a valid Email"
      );
    } else if (response.status === 401) {
      throw new Error("Incorrect Password! Please try again.");
    }
  } catch (error) {
    alert(error);
  }
};

export { loginHandler };
