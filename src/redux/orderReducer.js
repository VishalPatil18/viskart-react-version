/**
 * Welcome to @VISKart / SRC / REDUX / ORDER_REDUCER
 *
 * This is a Reducer function for the @OrderContext
 *
 * @type - reducer-function
 * @return - {object} updated OrderState for OrderContext
 * @export {object} -initialOrderState
 * @export {dispatch-function} - orderReducer()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const initialOrderState = {
  items: [],
  priceDetails: {},
  address: {},
  message: "",
  prevOrders: [],
};

const orderReducer = (orderState, orderAction) => {
  switch (orderAction.type) {
    case "ADD_ITEMS":
      return {
        ...orderState,
        items: orderAction.payload.items,
      };
    case "PRICE_DETAILS":
      return {
        ...orderState,
        priceDetails: orderAction.payload.priceDetails,
      };
    case "ADDRESS":
      return {
        ...orderState,
        address: orderAction.payload.address,
      };
    case "MESSAGE":
      return {
        ...orderState,
        message: orderAction.payload.message,
      };
    case "ADD_NEW_ORDER":
      return {
        items: [],
        priceDetails: {},
        address: {},
        message: "",
        prevOrders: [orderAction.payload.order, ...orderState.prevOrders],
      };
    default:
      return orderState;
  }
};

export { orderReducer, initialOrderState };
