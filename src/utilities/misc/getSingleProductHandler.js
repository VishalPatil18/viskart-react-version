/**
 * Welcome to @VISKart / SRC / UTILITIES / MISC / GET_SINGLE_PRODUCT_HANDLER!
 *
 * This is a utility function that gets a single product from the database using the @getSingleProductService
 *
 * @type - function
 * @param {string} productID - The ID of the product whose details needs to be fetched
 * @return {object} - return the product object fetched from the @getSingleProductService response
 * @export {function} getSingleProductHandler - The function that gets data for the single product
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { toast } from "react-toastify";
import { getSingleProductService } from "../../services";

const getSingleProductHandler = async (productID) => {
  try {
    const response = await getSingleProductService(productID);
    return response.data.product;
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    return {};
  }
};

export { getSingleProductHandler };
