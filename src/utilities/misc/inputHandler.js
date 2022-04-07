/**
 * Welcome to @VISKart / SRC / UTILITIES / MISC / INPUT_HANDLER!
 *
 * This is a utility function that takes the input and sets it to a state variable
 *
 * @type - function
 * @param {object} event - The event which triggered the input action
 * @param {string} inputType - The state variable for which input is being performed
 * @param {function} actionHandler - The state function that updates the state variable
 * @return - no return
 * @export {function} inputHandler - The function that handles the input events
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const inputHandler = (event, inputType, actionHandler) => {
  actionHandler((prevState) => ({
    ...prevState,
    [inputType]: event.target.value,
  }));
};

export { inputHandler };
