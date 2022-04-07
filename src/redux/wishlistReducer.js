/**
 * Welcome to @VISKart / SRC / REDUX / WISHLIST_REDUCER
 *
 * This is a Reducer function for the @WishlistContext
 *
 * @type - reducer-function
 * @return - {object} updated WishlistState for WishlistContext
 * @export {object} -initialWishlistState
 * @export {dispatch-function} - wishlistReducer()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const initialWishlistState = {
  wishlist: [],
};

const wishlistReducer = (wishlistState, wishlistAction) => {
  switch (wishlistAction.type) {
    case "INITIAL_WISHLIST":
      return {
        ...wishlistState,
        wishlist: wishlistAction.payload.wishlist,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlist: wishlistAction.payload.wishlist,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishlist: wishlistAction.payload.wishlist,
      };
    case "RESET_WISHLIST":
      return initialWishlistState;
    default:
      return wishlistState;
  }
};

export { initialWishlistState, wishlistReducer };
