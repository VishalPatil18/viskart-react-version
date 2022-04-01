import axios from "axios";

const removeFromCartService = (item, token) => {
  return axios.delete(`/api/user/cart/${item._id}`, {
    headers: { authorization: token },
  });
};

export { removeFromCartService };
