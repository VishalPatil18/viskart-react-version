/**
 * Welcome to @VISKart / SRC / CONTEXT / WISHLIST_CONTEXT
 *
 * This is a Context Provider for the Wishlist
 *
 * @type - context-provider
 * @return {react-component} -WishlistProvider component
 * @export {react-component} -WishlistProvider component
 * @export {custom-hook} - useWishlist()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { createContext, useContext, useReducer, useEffect } from "react";
import { initialWishlistState, wishlistReducer } from "../redux";
import { useAuth } from "../context";
import { wishlistService } from "../services";

const WishlistContext = createContext({
  wishlistState: {},
  wishlistDispatch: () => {},
});

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const { authState } = useAuth();

  useEffect(() => {
    authState.token
      ? (async () => {
          try {
            const response = await wishlistService(authState.token);
            wishlistDispatch({
              type: "INITIAL_WISHLIST",
              payload: { wishlist: response.data.wishlist },
            });
          } catch (error) {
            console.log("ERROR: ", error);
          }
        })()
      : null;
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
