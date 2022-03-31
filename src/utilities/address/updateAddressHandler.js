import { toast } from "react-toastify";
import { updateAddressService } from "../services";

const updateAddressHandler = async (
  event,
  address,
  token,
  authDispatch,
  setLoader,
  setAddressModal
) => {
  event.preventDefault();
  setLoader(true);
  try {
    const response = await updateAddressService(address, token);
    if (response.status === 200) {
      authDispatch({
        type: "UPDATE_ADDRESS",
        payload: {
          addresses: response.data.address,
        },
      });
      setLoader(false);
      setAddressModal(false);
      toast.success("Address Updated Successfully!");
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    setLoader(false);
    toast.error(error.response.data.errors[0]);
  }
};

export { updateAddressHandler };
