import { toast } from "react-toastify";
import { addNewAddressService } from "../../services";

const addNewAddressHandler = async (
  event,
  address,
  token,
  setLoader,
  setAddressModal,
  authDispatch
) => {
  event.preventDefault();
  setLoader(true);
  try {
    const response = await addNewAddressService(address, token);
    if (response.status === 201) {
      authDispatch({
        type: "ADD_NEW_ADDRESS",
        payload: {
          addresses: response.data.address,
        },
      });
      setLoader(false);
      setAddressModal(false);
      toast.success("Address added Successfully!");
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    setLoader(false);
    toast.error(error.response.data.errors[0]);
  }
};

export { addNewAddressHandler };
