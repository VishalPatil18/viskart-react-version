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
              items: orderState.items,
              priceDetails: orderState.priceDetails,
              address: orderState.address,
              message: orderState.message,
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
