import { HorizontalCard, PriceDetails, Breadcrumb } from "../components";
import { cart, ICONS_URL } from "../constants";
import styles from "./Cart.module.css";

const Cart = ({ cname }) => {
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
          <h5 className="h-5">My Cart</h5>
        </div>
        <div className={styles.productsAndPrice}>
          <section className={styles.myProducts}>
            {cart.map((item) => (
              <HorizontalCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                vendor={item.vendor}
                imageSrc={item.imageSrc}
                price={item.price}
                discount={item.discount}
              />
            ))}
          </section>

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
        </div>
      </div>
    </div>
  );
};

export { Cart };
