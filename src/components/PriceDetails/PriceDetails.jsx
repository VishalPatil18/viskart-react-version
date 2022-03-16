import { ICONS_URL } from "../../constants";
import styles from "./PriceDetails.module.css";

const PriceDetails = () => {
  return (
    <div className={styles.card}>
      <div className="card__title">
        <h5 className={`h-5 ${styles.cardTitleValue}`}>Price Details</h5>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.priceDesc}>
          <p className="bd-5">Price(2 items)</p>
          <p className="st-1 price-value">$149.00</p>
        </div>
        <div className={styles.priceDesc}>
          <p className="bd-5">Discount</p>
          <p className="st-1 price-value">-$25.00</p>
        </div>
        <div className={styles.priceDesc}>
          <p className="bd-5">Delivery Charges</p>
          <p className="st-1 price-value">$5.00</p>
        </div>
        <div className={styles.totalAmount}>
          <p className="bd-5">TOTAL AMOUNT</p>
          <p className="st-1 price-value">$129.00</p>
        </div>
        <div className={styles.priceDesc}>
          <p className="cp card-caption">You will save $25 on this order</p>
          <button className={`button txt-center ${styles.applyCouponsBtn}`}>
            <img
              className="icon-md icon-success"
              src={`${ICONS_URL}/tags.svg`}
              alt="tags"
            />
            Apply Coupons
          </button>
        </div>
      </div>
      <button className={`button btn-solid-primary ${styles.palceOrderBtn}`}>
        Place Order - $129.00
      </button>
    </div>
  );
};

export { PriceDetails };
