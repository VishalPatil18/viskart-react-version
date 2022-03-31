import {
  categoryFilterHandler,
  sortByHandler,
  ratingFilterHandler,
  priceSliderFilterHandler,
  searchHandler,
} from "../utilities";

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
