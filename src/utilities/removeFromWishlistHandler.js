import { removeFromWishlistService } from "../services";

const removeFromWishlistHandler = async (item, wishlistDispatch, token) => {
  try {
    const response = await removeFromWishlistService(item, token);
    if (response.status === 200) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: {
          wishlist: response.data.wishlist,
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromWishlistHandler };
