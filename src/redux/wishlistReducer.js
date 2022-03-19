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
    default:
      return wishlistState;
  }
};

export { initialWishlistState, wishlistReducer };
