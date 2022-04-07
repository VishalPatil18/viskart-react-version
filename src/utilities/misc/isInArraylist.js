/**
 * Welcome to @VISKart / SRC / UTILITIES / MISC / IS_IN_ARRAYLIST!
 *
 * This is a utility function that checks whether an item is in the arrayList or not.
 *
 * @type - function
 * @param {object} item - The item which needs to be found
 * @param {array} arrayList - The array which needs to be checked for the item
 * @return {boolean} return `TRUE` if item is found else `FALSE`
 * @export {function} isInArrayList - The function that checks for item in arraylist
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const isInArrayList = (item, arrayList) => {
  return arrayList.find((arrayItem) => arrayItem._id === item._id)
    ? true
    : false;
};

export { isInArrayList };
