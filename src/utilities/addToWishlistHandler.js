import { addToWishlistService } from "../services";

const addToWishlistHandler = async (item, wishlistDispatch, authState) => {
  try {
    const response = await addToWishlistService(item, authState.token);
    console.log(response);
    if (response.status === 201) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: {
          wishlist: response.data.wishlist,
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later!");
    }
  } catch (error) {
    alert(error);
  }
};

export { addToWishlistHandler };
