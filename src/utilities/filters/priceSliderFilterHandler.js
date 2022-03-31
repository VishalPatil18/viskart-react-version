const priceSliderFilterHandler = (products, range) => {
  if (range === "300") return products;
  return products.filter(
    (product) =>
      product.price * (1 - Number(product.discount) / 100) <= Number(range)
  );
};

export { priceSliderFilterHandler };
