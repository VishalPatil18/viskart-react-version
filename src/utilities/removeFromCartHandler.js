const removeFromCartHandler = (item, authDispatch, remove) => {
  authDispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      item: item,
      remove: remove,
    },
  });
};

export { removeFromCartHandler };
