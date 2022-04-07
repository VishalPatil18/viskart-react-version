/**
 * Welcome to @VISKart / SRC / UTILITIES / ADDRESS / UPDATE_ADDRESS_HANDLER!
 *
 * This is a utility function that updates an already existing address from the database
 * using the @updateAddressService
 *
 * @type - function
 * @param {object} event - The event which triggered this function call
 * @param {object} address - The address object that needs to be added to the database
 * @param {string} token - Auth token which verifies users auth activity
 * @param {function} authDispatch - Dispatch function to change the authState in authContext
 * @param {function} setLoader - Function to activate and deactivate loaders
 * @param {function} setAddressModal - Function to toggle the addressModal
 * @return - no return
 * @export {function} addNewAddressHandler - The function to perform addition of new address to database
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { toast } from "react-toastify";
import { updateAddressService } from "../../services";

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
