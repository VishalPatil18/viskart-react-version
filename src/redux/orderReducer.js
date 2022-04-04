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
