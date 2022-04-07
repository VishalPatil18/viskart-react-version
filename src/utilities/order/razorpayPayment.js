/**
 * Welcome to @VISKart / SRC / UTILITIES / ORDER / RAZORPAY_PAYMENT!
 *
 * This is a razorpay script and function used for payment integration
 *
 * @type - function
 * @param {object} orderState - A state object which has all order details from orderContext
 * @param {function} orderDispatch - Dispatch function to change the orderState in orderContext
 * @param {function} cartDispatch - Dispatch function to change the cartState in cartContext
 * @param {function} navigate - Function used to navigate from one route to another
 * @param {string} token - Auth token which verifies users auth activity
 * @return - no return
 * @export {function} displayRazorpay - The function that performs the mock payment
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { v4 as uuid } from "uuid";
import { clearCartService } from "../../services";
import { toast } from "react-toastify";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (
  orderState,
  orderDispatch,
  cartDispatch,
  navigate,
  token
) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("Razorpay SDK failed to load, check you connection!");
    return;
  }

  const options = {
    key: "rzp_test_vguN3MRhaRJi4G",
    amount: orderState.priceDetails.totalAmount * 75 * 100,
    currency: "INR",
    name: "VISKart",
    description: "Thank you for shopping with us! Enjoy your Games",
    image:
      "https://raw.githubusercontent.com/VishalPatil18/VISKart/development/assets/logo.svg",
    handler: async function () {
      const response = await clearCartService(token);
      if (response.status === 200) {
        cartDispatch({
          type: "RESET_CART",
        });
        orderDispatch({
          type: "ADD_NEW_ORDER",
          payload: {
            order: {
              id: uuid(),
              date: new Date(),
              items: orderState.items,
              priceDetails: orderState.priceDetails,
              address: orderState.address,
            },
          },
        });
        navigate("/user");
        toast.success("Order Placed Successfully!");
      } else {
        toast.error("Order Failed! Please try again!");
      }
    },
    prefill: {
      name: "Bablu Tailor",
      email: "bablu@gmail.com",
      contact: "9876543210",
    },
    theme: {
      color: "#23A6F0",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export { displayRazorpay };
