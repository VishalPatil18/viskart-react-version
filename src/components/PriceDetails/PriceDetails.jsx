import { useCart } from "../../context";
import { getPriceDetails } from "../../utilities";
import { ICONS_URL } from "../../constants";
import styles from "./PriceDetails.module.css";

const PriceDetails = () => {
  const { cartState } = useCart();
  const { totalPrice, totalDiscount, totalAmount, totalItems } =
    getPriceDetails(cartState.cart);

  return (
    <div className={styles.card}>
      <div className="card__title">
        <h5 className={`h-5 ${styles.cardTitleValue}`}>Price Details</h5>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.priceDesc}>
          <p className="bd-5">Price ({totalItems} items)</p>
          <p className="st-1 price-value">${totalPrice}</p>
        </div>
        <div className={styles.priceDesc}>
          <p className="bd-5">Discount</p>
          <p className="st-1 price-value">-${totalDiscount}</p>
        </div>
        <div className={styles.priceDesc}>
          <p className="bd-5">Delivery Charges</p>
          <p className="st-1 price-value">$5.00</p>
        </div>
        <div className={styles.totalAmount}>
          <p className="bd-5">TOTAL AMOUNT</p>
          <p className="st-1 price-value">
            ${(Number(totalAmount) + 5).toFixed(2)}
          </p>
        </div>
        <div className={styles.priceDesc}>
          <p className="cp card-caption">
            You will save ${totalDiscount} on this order
          </p>
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
        Place Order - ${(Number(totalAmount) + 5).toFixed(2)}
      </button>
    </div>
  );
};

export { PriceDetails };
