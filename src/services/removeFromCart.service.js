const removeFromCartService = (item, cart, remove) => {
  if (remove) {
    return cart.filter((currItem) => currItem._id !== item._id);
  }

  return cart.reduce((acc, curr) => {
    if (curr._id === item._id) {
      if (item.quantity > 1)
        acc = [...acc, { ...curr, quantity: curr.quantity - 1 }];
    } else acc = [...acc, curr];
    return acc;
  }, []);
};

export { removeFromCartService };
