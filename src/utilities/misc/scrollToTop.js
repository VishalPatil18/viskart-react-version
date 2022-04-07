/**
 * Welcome to @VISKart / SRC / UTILITIES / MISC / SCROLL_TO_TOP!
 *
 * This is a utility function that scrolls the user to top when they navigate from one page to other
 *
 * @type - function
 * @param - no param
 * @return - no return
 * @export {function} scrollToTop - The function that scrolls the user to top when navigating from one page to other
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const scrollToTop = () => {
  document.querySelector("html").scrollTo(0, 0);
  document.querySelector("#mainBody").scrollTo(0, 0);
};

export { scrollToTop };
