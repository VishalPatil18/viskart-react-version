/**
 * Welcome to @VISKart / SRC / UTILITIES / FILTERS / FILTER_HANDLER!
 *
 * This is a utility function that performs the filtering action based on the filters selected by user
 *
 * @type - function
 * @param {array} products - An array of all the products from which we want to filter based on selected filters
 * @param {string} sortBy - A string to depict the type of sorting action i.e. `HIGH_TO_LOW` or `LOW_TO_HIGH`
 * @param {array} categories - An array of categories selected by user
 * @param {string} rating - A string to depict the minimum rating which user has selected for products
 * @param {string} priceRange - A string to depict the minimum priceRange selected by user
 * @param {string} search - A string that the user has searched in the search input
 * @return {array} - array of newly filtered products which are valid for all filters
 * @export {function} filterHandler - The function to perform filtering of products
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import {
  categoryFilterHandler,
  sortByHandler,
  ratingFilterHandler,
  priceSliderFilterHandler,
  searchHandler,
} from "../../utilities";

const filterHandler = (
  products,
  sortBy,
  categories = [],
  rating,
  priceRange,
  search
) => {
  let filteredProducts = products;

  if (categories.length >= 1) {
    filteredProducts = categoryFilterHandler(filteredProducts, categories);
  }

  if (rating) {
    filteredProducts = ratingFilterHandler(filteredProducts, rating);
  }

  if (priceRange) {
    filteredProducts = priceSliderFilterHandler(filteredProducts, priceRange);
  }

  if (sortBy) {
    filteredProducts = sortByHandler(filteredProducts, sortBy);
  }

  if (search) {
    filteredProducts = searchHandler(filteredProducts, search);
  }

  return filteredProducts;
};

export { filterHandler };
