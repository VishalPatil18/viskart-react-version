import { Breadcrumb, WishlistCard } from "../components";
import { wishlist } from "../constants";
import styles from "./Wishlist.module.css";

const Wishlist = ({ cname }) => {
  return (
    <>
      <Breadcrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Wishlist", path: "/wishlist" },
        ]}
      />
      <div className={cname}>
        <div className={styles.productsHeading}>
          <h5 className="h-5">My Wishlist</h5>
        </div>
        <section className={styles.wishlistItems}>
          {wishlist.map((item) => (
            <WishlistCard
              title={item.title}
              vendor={item.vendor}
              imageSrc={item.imageSrc}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export { Wishlist };
