import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart, useOrder } from "../../context";
import { ICONS_URL } from "../../constants";
import styles from "./CouponsModal.module.css";

const CouponsModal = ({ setCouponsActive }) => {
  const { cartState, cartDispatch } = useCart();
  const { orderState } = useOrder();
  const [coupon, setCoupon] = useState({
    price: cartState.coupon.price,
    title: cartState.coupon.title,
  });

  return (
    <div className={`modal__container ${styles.modalContainer}`}>
      <section className="modal mdl__icons mdl-primary">
        <header className="modal__title">
          <h1 className="h-5">Offers Available</h1>
          <button
            className="button btn-action btn-plain-icon modal__title--close"
            onClick={() => setCouponsActive(false)}
          >
            <img
              className="icon-light icon-lg button__icon"
              src="https://raw.githubusercontent.com/VishalPatil18/VISPA-UI/main/assets/close.svg"
            />
          </button>
        </header>
        <main className={`modal__body ${styles.modalBody}`}>
          {orderState.priceDetails.totalAmount < 500 ? (
            <p className={styles.noOfferText}>
              You are not eligible for any offer. Please add more items to get
              these offers
            </p>
          ) : (
            <></>
          )}
          <div className="checkbox">
            <input
              type="checkbox"
              className={styles.input}
              id="Aaiye aapka Intazaar tha offer"
              checked={coupon.title === "Aaiye aapka Intazaar tha offer"}
              onChange={() => {
                if (coupon.title !== "Aaiye aapka Intazaar tha offer") {
                  setCoupon({
                    price: 50,
                    title: "Aaiye aapka Intazaar tha offer",
                  });
                } else {
                  setCoupon({
                    price: 0,
                    title: "",
                  });
                }
              }}
            />
            <label
              htmlFor="Aaiye aapka Intazaar tha offer"
              className={`${styles.labelWrapper} ${
                orderState.priceDetails.totalAmount < 500 ? styles.notValid : ""
              } ${
                coupon.title === "Aaiye aapka Intazaar tha offer"
                  ? styles.selected
                  : ""
              }`}
            >
              {coupon.title === "Aaiye aapka Intazaar tha offer" ? (
                <img
                  className={`icon-light icon-lg`}
                  src={`${ICONS_URL}/check.svg`}
                  alt="check"
                />
              ) : (
                <></>
              )}
              <div>
                <h6 className="h-6">Aaiye aapka Intazaar tha offer</h6>
                <p>Save $50 on minimum purchase of $500</p>
              </div>
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="Malamaal Weekly Offer"
              className={styles.input}
              checked={coupon.title === "Malamaal Weekly Offer"}
              onChange={() => {
                if (coupon.title !== "Malamaal Weekly Offer") {
                  setCoupon({
                    price: 100,
                    title: "Malamaal Weekly Offer",
                  });
                } else {
                  setCoupon({
                    price: 0,
                    title: "",
                  });
                }
              }}
            />
            <label
              htmlFor="Malamaal Weekly Offer"
              className={`${styles.labelWrapper} ${
                orderState.priceDetails.totalAmount < 799 ? styles.notValid : ""
              } ${
                coupon.title === "Malamaal Weekly Offer" ? styles.selected : ""
              }`}
            >
              {coupon.title === "Malamaal Weekly Offer" ? (
                <img
                  className={`icon-light icon-lg`}
                  src={`${ICONS_URL}/check.svg`}
                  alt="check"
                />
              ) : (
                <></>
              )}
              <div>
                <h6 className="h-6">Malamaal Weekly Offer</h6>
                <p>Save $100 on minimum purchase of $799</p>
              </div>
            </label>
          </div>
        </main>
        <footer className="modal__footer">
          <Link
            to="/products"
            className="button btn-solid-primary modal__footer--btn"
          >
            Buy More Games
          </Link>
          <button
            className="button btn-solid-primary modal__footer--btn"
            onClick={() => {
              cartDispatch({
                type: "COUPONS",
                payload: { coupon: coupon },
              });
              setCouponsActive(false);
              if (coupon.title !== "") {
                toast.success(`${coupon.title} Coupon Applied Successfully!`);
              } else {
                toast.warning(`${coupon.title} Coupon Removed!`);
              }
            }}
          >
            Apply Coupon
          </button>
        </footer>
      </section>
    </div>
  );
};

export { CouponsModal };
