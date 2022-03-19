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
            console.log("Authstate token in cartcontext", authState.token);
            console.log("Useeffect called initially");
            const response = await cartService(authState.token);
            console.log(response.data.cart);
            cartDispatch({
              type: "INITIAL_DATA",
              payload: response.data.cart,
            });
          } catch (error) {
            console.log("ERROR: ", error);
          }
        })()
      : console.log("Useeffect called initially but authstate.user is false");
  }, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
