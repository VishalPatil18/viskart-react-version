import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HorizontalCard, PriceDetails, Breadcrumb } from "../components";
import { useAuth, useCart } from "../context";
import { scrollToTop } from "../utilities";
import styles from "./Cart.module.css";

const Cart = ({ cname }) => {
  const { cartState } = useCart();
  const { authState } = useAuth();

  useEffect(scrollToTop, []);

  return (
    <div id="mainBody">
      <Breadcrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Cart", path: "/cart" },
        ]}
      />
      <div className={cname}>
        <div className={styles.productsHeading}>
          <h5 className="h-5">
            My Cart
            {cartState.cart.length !== 0 && (
              <span>({cartState.cart.length})</span>
            )}
          </h5>
        </div>
        <div className={styles.productsAndPrice}>
          <section className={styles.myProducts}>
            {cartState.cart.length === 0 && (
              <div className={styles.emptyCartMsgWrapper}>
                <img
                  src="https://res.cloudinary.com/dbjdu0hvl/image/upload/v1649097607/VISKart/emptyCart_ewsfjb.png"
                  loading="lazy"
                  alt="empty-cart"
                />
                <p className={styles.emptyCartMsg}>
                  Your Cart is Empty! <br /> Add something to make us happy
                </p>
                <Link to="/products" className="button btn-solid-primary">
                  Start Shopping Now
                </Link>
              </div>
            )}
            {authState.user &&
              cartState.cart.map((item) => (
                <HorizontalCard key={item._id} item={item} />
              ))}
          </section>

          {cartState.cart.length !== 0 && (
            <aside className={styles.priceDetails}>
              <PriceDetails />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export { Cart };
