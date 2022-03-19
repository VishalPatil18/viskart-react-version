import { updateCartService } from "../services";

const updateCartHandler = async (item, cartDispatch, token, action) => {
  try {
    const response = await updateCartService(item, token, action);
    if (response.status === 200) {
      cartDispatch({
        type: "UPDATE_CART",
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

export { updateCartHandler };
