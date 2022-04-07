/**
 * Welcome to @VISKart / SRC / CONTEXT / CART_CONTEXT
 *
 * This is a Context Provider for the Cart
 *
 * @type - context-provider
 * @return {react-component} - CartProvider component
 * @export {react-component} - CartProvider component
 * @export {custom-hook} - useCart()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { createContext, useContext, useReducer, useEffect } from "react";
import { initialCartState, cartReducer } from "../redux";
import { useAuth } from "../context";
import { cartService } from "../services";

const CartContext = createContext({
  cartState: {},
  cartDispatch: () => {},
});

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const { authState } = useAuth();

  useEffect(() => {
    authState.token
      ? (async () => {
          try {
            const response = await cartService(authState.token);
            cartDispatch({
              type: "INITIAL_CART",
              payload: { cart: response.data.cart },
            });
          } catch (error) {
            console.log("ERROR: ", error);
          }
        })()
      : null;
  }, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
