import axios from "axios";

const wishlistService = (token) => {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  });
};

export { wishlistService };
