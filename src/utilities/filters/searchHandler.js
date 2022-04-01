const searchHandler = (products, searchText) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
};

export { searchHandler };
