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
