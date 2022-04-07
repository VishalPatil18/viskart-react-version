/**
 * Welcome to @VISKart / SRC / UTILITIES / MISC / CATEGORY_PRODUCTS_HANDLER!
 *
 * This is a utility function that performs filtering products from the category selected by user from
 * the landing page and navigate the user to product listing page with that category as selected
 *
 * @type - function
 * @param {string} categoryName - The category name of the category selected by user
 * @param {function} filterDispatch - Dispatch function to change the filterState in filterContext
 * @param {function} navigate - Function used to navigate from one route to another
 * @return - no return
 * @export {function} categoryProductsHandler - The function to perform filtering of products based
 *                                              on selected category
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const categoryProductsHandler = (categoryName, filterDispatch, navigate) => {
  filterDispatch({
    type: "CATEGORISE",
    payload: {
      categories: [categoryName],
    },
  });
  navigate("/products");
};

export { categoryProductsHandler };
