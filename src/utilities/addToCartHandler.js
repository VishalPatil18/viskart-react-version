import { addToCartService } from "../services";

const addToCartHandler = async (item, cartDispatch, authState) => {
  try {
    const response = await addToCartService(item, authState.token);
    if (response.status === 201) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: {
          cart: response.data.cart,
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later!");
    }
  } catch (error) {
    alert(error);
  }
};

export { addToCartHandler };
