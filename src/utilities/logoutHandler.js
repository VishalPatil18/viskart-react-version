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
