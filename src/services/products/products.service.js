/**
 * Welcome to @VISKart / SRC / SERVICES / PRODUCTS / PRODUCTS_SERVICE
 *
 * This is a service function that fetches a single product from the backend server
 *
 * @type - function
 * @request - GET
 * @param - no param
 * @return {object} - response obtained after the request is performed
 * @export {function} productsService - The service function that gets all the products from backend server
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import axios from "axios";

const productsService = () => {
  return axios.get("/api/products");
};

export { productsService };
