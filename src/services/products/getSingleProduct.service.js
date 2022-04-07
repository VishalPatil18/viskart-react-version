/**
 * Welcome to @VISKart / SRC / SERVICES / PRODUCTS / GET_SINGLE_PRODUCT_SERVICE
 *
 * This is a service function that fetches a single product from the backend server
 *
 * @type - function
 * @request - GET
 * @param {string} productId - The Id of the item that needs to be fetched from backend server
 * @return {object} - response obtained after the request is performed
 * @export {function} getSingleProductService - The service function that gets a single product from backend server
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const getSingleProductService = (productId) => {
  return axios.get(`/api/products/${productId}`);
};

export { getSingleProductService };
