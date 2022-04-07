/**
 * Welcome to @VISKart / SRC / UTILITIES / ADDRESS / REMOVE_ADDRESS_HANDLER!
 *
 * This is a utility function that removed an already existing address from the database using
 * the @removeAddressService
 *
 * @type - function
 * @param {string} addressId - The unique Id of the address to be removed from database
 * @param {string} token - Auth token which verifies users auth activity
 * @param {function} setLoader - Function to activate and deactivate loaders
 * @param {function} authDispatch - Dispatch function to change the authState in authContext
 * @return - no return
 * @export {function} removeAddressHandler - The function to perform removal of address from database
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

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
