import axios from "axios";

const removeFromWishlistService = (item, token) => {
  return axios.delete(`/api/user/wishlist/${item._id}`, {
    headers: { authorization: token },
  });
};

export { removeFromWishlistService };
