/**
 * Welcome to @VISKart / SRC / UTILITIES / ADDRESS / ADD_NEW_ADDRESS_HANDLER!
 *
 * This is a utility function that adds a new address to the API using the @addNewAddressService
 *
 * @type - function
 * @param {object} event - The event which triggered this function call
 * @param {object} address - The address object that needs to be added to the database
 * @param {string} token - Auth token which verifies users auth activity
 * @param {function} setLoader - Function to activate and deactivate loaders
 * @param {function} setAddressModal - Function to toggle the addressModal
 * @param {function} authDispatch - Dispatch function to change the authState in authContext
 * @return - no return
 * @export {function} addNewAddressHandler - The function to perform addition of new address to database
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

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
