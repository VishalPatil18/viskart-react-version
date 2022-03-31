import { toast } from "react-toastify";
import { addToWishlistService } from "../../services";

const addToWishlistHandler = async (item, wishlistDispatch, token) => {
  try {
    const response = await addToWishlistService(item, token);
    if (response.status === 201) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: {
          wishlist: response.data.wishlist,
        },
      });
      toast.info(`${item.title} added to wishlist`);
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addToWishlistHandler };
