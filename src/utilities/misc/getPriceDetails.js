/**
 * Welcome to @VISKart / SRC / UTILITIES / MISC / GET_PRICE_DETAILS!
 *
 * This is a utility function that calculated the price details like totalItems, totalPrice,
 * totalDiscount, delivery charges and total amount to be paid by the user from the cart items.
 *
 * @type - function
 * @param {array} cart - An array of items present in the cart
 * @param {function} orderDispatch - Dispatch function to change the orderState in orderContext
 * @return {object} - return an object having all the price details calculated
 * @export {function} getPriceDetails - The function to calculate all price details
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const getPriceDetails = (cart, coupon, orderDispatch) => {
  const totalItems = cart.reduce((acc, curr) => (acc += curr.qty), 0);

  const totalPrice = cart
    .reduce((acc, curr) => (acc += Number(curr.price) * Number(curr.qty)), 0)
    .toFixed(2);

  const totalDiscount = (
    cart.reduce(
      (acc, curr) =>
        (acc += curr.discount
          ? Number(curr.qty) *
            (Number(curr.price) * (Number(curr.discount) / 100))
          : 0),
      0
    ) + coupon.price
  ).toFixed(2);

  const deliveryCharges = 5;

  const totalAmount = (totalPrice - totalDiscount + deliveryCharges).toFixed(2);

  orderDispatch({
    type: "PRICE_DETAILS",
    payload: {
      priceDetails: {
        totalPrice,
        totalDiscount,
        deliveryCharges,
        totalAmount,
        totalItems,
      },
    },
  });

  return {
    totalPrice,
    totalDiscount,
    deliveryCharges,
    totalAmount,
    totalItems,
  };
};

export { getPriceDetails };
