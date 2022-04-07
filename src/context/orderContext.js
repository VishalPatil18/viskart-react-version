/**
 * Welcome to @VISKart / SRC / CONTEXT / ORDER_CONTEXT
 *
 * This is a Context Provider for the Orders
 *
 * @type - context-provider
 * @return {react-component} - OrderProvider component
 * @export {react-component} - OrderProvider component
 * @export {custom-hook} - useOrder()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { createContext, useContext, useReducer } from "react";
import { initialOrderState, orderReducer } from "../redux";

const OrderContext = createContext({
  orderState: {},
  orderDispatch: () => {},
});

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(
    orderReducer,
    initialOrderState
  );

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { OrderProvider, useOrder };
