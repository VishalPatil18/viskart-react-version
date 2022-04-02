import { useState } from "react";
import { useOrder } from "../../context";
import styles from "./OrderMsg.module.css";

const OrderMsg = ({ setStep }) => {
  const { orderState, orderDispatch } = useOrder();
  const [orderMsg, setOrderMsg] = useState(orderState.message);

  const btnHandler = (action) => {
    orderDispatch({
      type: "MESSAGE",
      payload: {
        message: orderMsg,
      },
    });

    if (action === "prev") {
      setStep((prevStep) => prevStep - 1);
    } else if (action === "next") {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <section className={styles.body}>
      <h5 className="h-6 txt-center">Any Message You Want on your parcel?</h5>
      <textarea
        draggable={false}
        rows="8"
        className={`input__field--text ${styles.textarea}`}
        placeholder="Your 100 Characters long Message goes here..."
        maxLength="100"
        value={orderMsg}
        onChange={(e) => setOrderMsg(e.target.value)}
      ></textarea>
      <div className={styles.btnsWrapper}>
        <button
          className="button btn-solid-primary"
          onClick={() => btnHandler("prev")}
        >
          Previous
        </button>
        <button
          className="button btn-solid-primary"
          onClick={() => btnHandler("next")}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export { OrderMsg };
