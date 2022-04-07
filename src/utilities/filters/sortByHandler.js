/**
 * Welcome to @VISKart / SRC / UTILITIES / FILTERS / SORT_BY_HANDLER!
 *
 * This is a utility function that performs the sorting of products based on the sorting type selected by user
 *
 * @type - function
 * @param {array} products - An array of all the products which we want to sort based on their price
 * @param {string} type - The sorting type selected by user i.e. `LOW-TO-HIGH` or `HIGH-TO-LOW`
 * @return {array} - array of newly sorted products based on sorting type selected by user
 * @export {function} sortByHandler - The function to perform sorting of products based on sorting type
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const sortByHandler = (products, type) => {
  return [...products].sort((productOne, productTwo) => {
    const priceOne = productOne.price * (1 - productOne.discount / 100);
    const priceTwo = productTwo.price * (1 - productTwo.discount / 100);
    if (type === "high-to-low") return priceTwo - priceOne;
    else if (type === "low-to-high") return priceOne - priceTwo;
  });
};

export { sortByHandler };
