/**
 * Welcome to @VISKart / SRC / UTILITIES / FILTERS / PRICE_SLIDER_FILTER_HANDLER!
 *
 * This is a utility function that performs the filtering action based on the price selected by user
 * from the price slider
 *
 * @type - function
 * @param {array} products - An array of all the products from which we want to filter based on product price
 * @param {string} range - A string to depict the minimum price range selected by user
 * @return {array} - array of newly filtered products which have price less than selected price by user
 * @export {function} priceSliderFilterHandler - The function to perform filtering of products based on their price
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const priceSliderFilterHandler = (products, range) => {
  if (range === "300") return products;
  return products.filter(
    (product) =>
      product.price * (1 - Number(product.discount) / 100) <= Number(range)
  );
};

export { priceSliderFilterHandler };
