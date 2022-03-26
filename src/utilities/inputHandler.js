const inputHandler = (event, inputType, actionHandler) => {
  actionHandler((prevState) => ({
    ...prevState,
    [inputType]: event.target.value,
  }));
};

export { inputHandler };
