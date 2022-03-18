import { addToCartService, removeFromCartService } from "../services";

const initialAuthState = {
  token: null,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_CHECK":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGOUT":
      return { ...state, token: null, user: null };
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        user: {
          ...state.user,
          cart: addToCartService(action.payload.item, state.user.cart),
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        user: {
          ...state.user,
          cart: removeFromCartService(
            action.payload.item,
            state.user.cart,
            action.payload.remove
          ),
        },
      };
    default:
      return state;
  }
};

export { initialAuthState, authReducer };
