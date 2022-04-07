/**
 * Welcome to @VISKart / SRC / UTILITIES / FILTERS / CATEGORY_FILTER_HANDLER!
 *
 * This is a utility function that filters out the products based on the categories selected
 * by the user from the filters section on product listing page
 *
 * @type - function
 * @param {array} products - An array of all the products from which we want to filter based on category
 * @param {array} categories - An array of categories selected by user
 * @return {array} - array of newly filtered products which belong to same category as selected by user
 * @export {function} categoryFilterHandler - The function to perform filtering of products based on category
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const categoryFilterHandler = (products, categories) => {
  return products.filter((product) => {
    for (let i = 0; i < categories.length; i++) {
      const isCategoryPresent = product.categoryName.find(
        (productCategory) => productCategory === categories[i]
      );
      if (isCategoryPresent) return true;
    }
    return false;
  });
};

export { categoryFilterHandler };
