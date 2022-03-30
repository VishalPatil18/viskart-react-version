import axios from "axios";

const removeAddressService = (addressId, token) => {
  return axios.delete(`api/user/address/${addressId}`, {
    headers: {
      authorization: token,
    },
  });
};

export { removeAddressService };
