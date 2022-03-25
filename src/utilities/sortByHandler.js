const sortByHandler = (products, type) => {
  return [
    ...products.sort((productOne, productTwo) => {
      const priceOne = productOne.price * (1 - productOne.discount / 100);
      const priceTwo = productTwo.price * (1 - productTwo.discount / 100);
      if (type === "high-to-low") return priceTwo - priceOne;
      else if (type === "low-to-high") return priceOne - priceTwo;
    }),
  ];
};

export { sortByHandler };
