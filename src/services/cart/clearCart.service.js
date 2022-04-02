import axios from "axios";

const clearCartService = (token) => {
  return axios.delete("/api/user/cart/all", {
    headers: { authorization: token },
  });
};

export { clearCartService };
