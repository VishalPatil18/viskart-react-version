/**
 * Welcome to @VISKart / SRC / UTILITIES / FILTERS / RATING_FILTER_HANDLER!
 *
 * This is a utility function that performs the filtering action based on the minimum rating selected by user
 *
 * @type - function
 * @param {array} products - An array of all the products from which we want to filter based on product rating
 * @param {string} rating - A string to depict the minimum rating selected by user
 * @return {array} - array of newly filtered products which have rating greater than selected rating by user
 * @export {function} ratingFilterHandler - The function to perform filtering of products based on their rating
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const ratingFilterHandler = (products, rating) => {
  return products.filter((product) => product.rating >= rating);
};

export { ratingFilterHandler };
