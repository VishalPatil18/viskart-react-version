import axios from "axios";

const updateCartService = (item, token, action) => {
  return axios.post(
    `/api/user/cart/${item._id}`,
    { action: { type: action } },
    {
      headers: { authorization: token },
    }
  );
};

export { updateCartService };
