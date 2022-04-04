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
