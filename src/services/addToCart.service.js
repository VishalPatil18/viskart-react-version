const addToCartService = (item, cart) => {
  const isItemPresent = cart.find((cartItem) => item._id === cartItem._id);
  if (isItemPresent !== undefined) {
    return cart.reduce(
      (acc, curr) => [
        ...acc,
        curr._id === item._id ? { ...curr, quantity: curr.quantity + 1 } : curr,
      ],
      []
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};

export { addToCartService };
