import { Link } from "react-router-dom";
import { HorizontalCard, PriceDetails, Breadcrumb } from "../components";
import { ICONS_URL } from "../constants";
import { useAuth } from "../context";
import styles from "./Cart.module.css";

const Cart = ({ cname }) => {
  const { authState } = useAuth();

  return (
    <div>
      <Breadcrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Cart", path: "/cart" },
        ]}
      />
      <div className={cname}>
        <div className={styles.productsHeading}>
          <h5 className="h-5">
            My Cart{" "}
            {authState.user.cart.length !== 0 && (
              <span>({authState.user.cart.length})</span>
            )}
          </h5>
        </div>
        <div className={styles.productsAndPrice}>
          <section className={styles.myProducts}>
            {authState.user.cart.length === 0 && (
              <div className={styles.emptyCartMsgWrapper}>
                <p className={styles.emptyCartMsg}>
                  Your Cart is Empty! <br /> Add something to make us happy{" "}
                  <br />
                  🙃
                </p>
                <Link to="/products" className="button btn-solid-primary">
                  Continue Shopping
                </Link>
              </div>
            )}
            {authState.user &&
              authState.user.cart.map((item) => (
                <HorizontalCard key={item.id} item={item} />
              ))}
          </section>

          {authState.user.cart.length !== 0 && (
            <aside className={styles.priceDetails}>
              <PriceDetails />
              <button
                className={`button btn-solid-primary txt-center ${styles.shareCartBtn}`}
              >
                <img
                  className="icon-md icon-light"
                  src={`${ICONS_URL}/share-square.svg`}
                  alt="share"
                />
                Share Cart
              </button>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export { Cart };
