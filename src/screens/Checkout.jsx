import { useState } from "react";
import { OrderMsg, OrderSummary, SelectAddress } from "../components";
import styles from "../App.module.css";

const Checkout = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={styles.main}>
      <h5 className="h-5 txt-center">Checkout Page</h5>
      {(() => {
        switch (step) {
          case 1:
            return <SelectAddress setStep={setStep} />;
          case 2:
            return <OrderMsg setStep={setStep} />;
          case 3:
            return <OrderSummary setStep={setStep} />;
        }
      })()}
    </div>
  );
};

export { Checkout };
