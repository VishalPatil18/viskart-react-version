import { useNavigate } from "react-router";
import { useCart, useOrder } from "../../context";
import { displayRazorpay } from "../../utilities";
import { AddressCard } from "../AddressCard/AddressCard";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({ setStep }) => {
  const { orderState, orderDispatch } = useOrder();
  const { cartDispatch } = useCart();
  const navigate = useNavigate();

  return (
    <section className={styles.body}>
      <h5 className="h-5 txt-center">Order Summary</h5>
      <div className={styles.productsWrapper}>
        {orderState.items.map((item) => (
          <div className={styles.productCard} key={item._id}>
            <p className={styles.productTitle}>{item.title}</p>
            <div className={styles.priceQtyWrapper}>
              <p className={styles.priceQty}>Quantity: {item.qty}</p>
              <p className={styles.priceQty}>
                Final Price: $
                {(item.qty * (item.price * (1 - item.discount / 100))).toFixed(
                  2
                )}
              </p>
            </div>
          </div>
        ))}

        <div className={styles.productCard}>
          <table className={styles.table}>
            <tr>
              <td className={styles.tableData}>Total Items</td>
              <td className={styles.tableData}>
                {orderState.priceDetails.totalItems}
              </td>
            </tr>
            <tr>
              <td className={styles.tableData}>Total Price</td>
              <td className={styles.tableData}>
                ${orderState.priceDetails.totalPrice}
              </td>
            </tr>
            <tr>
              <td className={styles.tableData}>Total Discount</td>
              <td className={styles.tableData}>
                ${orderState.priceDetails.totalDiscount}
              </td>
            </tr>
            <tr>
              <td className={styles.tableData}>Delivery Charges</td>
              <td className={styles.tableData}>
                ${orderState.priceDetails.deliveryCharges}
              </td>
            </tr>
            <tr>
              <td className={styles.tableData}>Total Amount to pay</td>
              <td className={styles.tableData}>
                ${orderState.priceDetails.totalAmount}
              </td>
            </tr>
          </table>
          <small className={`txt-center ${styles.saveNote}`}>
            You will save $
            {(
              orderState.priceDetails.totalPrice -
              (orderState.priceDetails.totalAmount -
                orderState.priceDetails.deliveryCharges)
            ).toFixed(2)}
            &nbsp;on this order
          </small>
        </div>
        <div className={`${styles.productCard} ${styles.addressCard}`}>
          <small className={styles.sectionHeading}>
            Your order will be delivered here!
          </small>
          <AddressCard address={orderState.address} />
        </div>
        <div className={styles.productCard}>
          <p className={styles.sectionHeading}>Parcel Message</p>
          <p className={styles.parcelMsg}>
            {orderState.message.length > 0 ? (
              orderState.message
            ) : (
              <p>No Message Written</p>
            )}
          </p>
        </div>
      </div>
      <div className={styles.btnsWrapper}>
        <button
          className="button btn-solid-primary"
          onClick={() => setStep((prevStep) => prevStep - 1)}
        >
          Previous
        </button>
        <button
          className="button btn-solid-primary"
          onClick={() =>
            displayRazorpay(orderState, orderDispatch, cartDispatch, navigate)
          }
        >
          Place Order
        </button>
      </div>
    </section>
  );
};

export { OrderSummary };
