/**
 * Welcome to @VISKart / SRC / REDUX / CART_REDUCER
 *
 * This is a Reducer function for the @CartContext
 *
 * @type - reducer-function
 * @return - {object} updated CartState for CartContext
 * @export {object} -initialCartState
 * @export {dispatch-function} - cartReducer()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const initialCartState = {
  cart: [],
  coupon: { price: 0, title: "" },
};

const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "INITIAL_CART":
      return { ...cartState, cart: cartAction.payload.cart, coupons: 0 };
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
    case "RESET_CART":
      return initialCartState;
    case "COUPONS":
      return {
        ...cartState,
        coupon: cartAction.payload.coupon,
      };
    default:
      return cartState;
  }
};

export { initialCartState, cartReducer };
