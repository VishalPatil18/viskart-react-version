/**
 * Welcome to @VISKart / SRC / UTILITIES / MISC / MODAL_HANDLER!
 *
 * This is a utility function that toggles the authModal
 *
 * @type - function
 * @param {string} action - The action we're performing on the modal i.e. `CLOSE`,
 *                          toggle `LOGIN` or toggle `SIGNUP`
 * @param {function} setAuthModalOpen - A state function to update the authModalOpen state
 * @return - no return
 * @export {function} modalHandler - The function that toggles the authModals
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const modalHandler = (action, setAuthModalOpen) => {
  setAuthModalOpen(() => {
    switch (action) {
      case "CLOSE":
        return { login: false, signup: false };
      case "SIGNUP":
        return { login: false, signup: true };
      case "LOGIN":
        return { login: true, signup: false };
      default:
        return { login: false, signup: false };
    }
  });
};

export { modalHandler };
