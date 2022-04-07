import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart, useOrder } from "../../context";
import { getPriceDetails } from "../../utilities";
import { ICONS_URL } from "../../constants";
import { CouponsModal } from "../CouponsModal/CouponsModal";
import styles from "./PriceDetails.module.css";

const PriceDetails = () => {
  const { cartState } = useCart();
  const { orderDispatch } = useOrder();
  const [cartPrice, setCartPrice] = useState({});
  const [couponsActive, setCouponsActive] = useState(false);

  console.log(cartState);

  useEffect(() => {
    setCartPrice(
      getPriceDetails(cartState.cart, cartState.coupon, orderDispatch)
    );
    orderDispatch({
      type: "ADD_ITEMS",
      payload: {
        items: cartState.cart,
      },
    });
  }, [cartState]);

  return (
    <div className={styles.card}>
      <div className="card__title">
        <h5 className={`h-5 ${styles.cardTitleValue}`}>Price Details</h5>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.priceDesc}>
          <p className="bd-5">Price ({cartPrice.totalItems} items)</p>
          <p className="st-1 price-value">${cartPrice.totalPrice}</p>
        </div>
        <div className={styles.priceDesc}>
          <p className="bd-5">Discount</p>
          <p className="st-1 price-value">-${cartPrice.totalDiscount}</p>
        </div>
        <div className={styles.priceDesc}>
          <p className="bd-5">Delivery Charges</p>
          <p className="st-1 price-value">${cartPrice.deliveryCharges}</p>
        </div>
        <div className={styles.totalAmount}>
          <p className="bd-5">TOTAL AMOUNT</p>
          <p className="st-1 price-value">${cartPrice.totalAmount}</p>
        </div>
        <div className={styles.priceDesc}>
          <p className="cp card-caption">
            You will save ${cartPrice.totalDiscount} on this order
          </p>
          <button
            className={`button txt-center ${styles.applyCouponsBtn}`}
            onClick={() => setCouponsActive(true)}
          >
            <img
              className="icon-md icon-success"
              src={`${ICONS_URL}/tags.svg`}
              loading="lazy"
              alt="tags"
            />
            Apply Coupons
          </button>
        </div>
      </div>
      <Link
        to="/checkout"
        className={`button btn-solid-primary ${styles.palceOrderBtn}`}
      >
        Checkout - ${cartPrice.totalAmount}
      </Link>
      {couponsActive ? (
        <CouponsModal setCouponsActive={setCouponsActive} />
      ) : (
        <></>
      )}
    </div>
  );
};

export { PriceDetails };
