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
