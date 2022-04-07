/**
 * Welcome to @VISKart / SRC / UTILITIES / FILTERS / SEARCH_HANDLER!
 *
 * This is a utility function that performs the search action based on the search input of user
 *
 * @type - function
 * @param {array} products - An array of all the products from which we want to filter based on product rating
 * @param {string} searchText - The string entered by user in the search input
 * @return {array} - array of newly filtered products whose title has alphabets in same order as in the string
 *                   entered by the user in the search input
 * @export {function} searchHandler - The function to perform filtering of products based on search input of
 *                                    user and products title
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const searchHandler = (products, searchText) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
};

export { searchHandler };
