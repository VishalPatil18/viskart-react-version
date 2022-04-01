const ratingFilterHandler = (products, rating) => {
  return products.filter((product) => product.rating >= rating);
};

export { ratingFilterHandler };
