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
