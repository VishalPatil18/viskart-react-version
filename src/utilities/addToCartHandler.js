const addToCartHandler = (item, authDispatch) => {
  authDispatch({
    type: "ADD_TO_CART",
    payload: {
      item: item,
    },
  });
};

export { addToCartHandler };
