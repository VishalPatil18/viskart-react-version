const addToCartService = (item, cart) => {
  const isItemPresent = cart.find((cartItem) => item.id === cartItem.id);
  if (isItemPresent !== undefined) {
    return cart.reduce(
      (acc, curr) => [
        ...acc,
        curr.id === item.id ? { ...curr, quantity: curr.quantity + 1 } : curr,
      ],
      []
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};

export { addToCartService };
