const initialCartState = {
  cart: [],
};

const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "INITIAL_CART":
      return { ...cartState, cart: cartAction.payload };
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: cartAction.payload.cart,
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: cartAction.payload.cart,
      };
    case "UPDATE_CART":
      return {
        ...cartState,
        cart: cartAction.payload.cart,
      };
    default:
      return cartState;
  }
};

export { initialCartState, cartReducer };
