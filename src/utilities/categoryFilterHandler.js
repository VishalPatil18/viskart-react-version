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
