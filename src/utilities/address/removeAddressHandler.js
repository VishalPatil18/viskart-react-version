import { toast } from "react-toastify";
import { removeAddressService } from "../../services";

const removeAddressHandler = async (
  addressId,
  token,
  setLoader,
  authDispatch
) => {
  setLoader(true);
  try {
    const response = await removeAddressService(addressId, token);
    if (response.status === 200) {
      authDispatch({
        type: "REMOVE_ADDRESS",
        payload: {
          addresses: response.data.address,
        },
      });
      setLoader(false);
      toast.success("Address removed Successfully!");
    } else {
      throw new Error("Something went wrong! Please try again later!");
    }
  } catch (error) {
    setLoader(false);
    toast.error(error.response.data.errors[0]);
  }
};

export { removeAddressHandler };
