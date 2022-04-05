import { useEffect } from "react";
import { scrollToTop } from "../utilities";
import { Breadcrumb, HorizontalCard } from "../components";
import { useWishlist } from "../context";
import { Link } from "react-router-dom";
import styles from "./Wishlist.module.css";

const Wishlist = ({ cname }) => {
  const { wishlistState } = useWishlist();

  useEffect(scrollToTop, []);

  return (
    <div id="mainBody">
      <Breadcrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Wishlist", path: "/wishlist" },
        ]}
      />
      <div className={cname}>
        <div className={styles.productsHeading}>
          <h5 className="h-5">
            My Wishlist
            {wishlistState.wishlist.length > 0 && (
              <span>({wishlistState.wishlist.length})</span>
            )}
          </h5>
        </div>
        <section className={styles.wishlistItems}>
          {wishlistState.wishlist.length === 0 && (
            <div className={styles.emptyWishlistMsgWrapper}>
              <img
                src="https://res.cloudinary.com/dbjdu0hvl/image/upload/v1649097607/VISKart/emptyWishlist_jujct9.png"
                loading="lazy"
                alt="empty-wishlist"
              />
              <p className={styles.emptyWishlistMsg}>
                Your Wishlist is Empty! <br /> Add something to make us happy
              </p>
              <Link to="/products" className="button btn-solid-primary">
                Start Shopping Now
              </Link>
            </div>
          )}
          {wishlistState.wishlist.map((item) => (
            <HorizontalCard key={item._id} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
};

export { Wishlist };
