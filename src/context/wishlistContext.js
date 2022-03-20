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
              type: "INITIAL_DATA",
              payload: response.data.wishList,
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
