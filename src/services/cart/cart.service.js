import axios from "axios";

const cartService = (token) => {
  return axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
};

export { cartService };
