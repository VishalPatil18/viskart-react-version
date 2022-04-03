import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import { removeFromWishlistHandler, addToCartHandler } from "../../utilities";
import { ICONS_URL } from "../../constants";
import styles from "./WishlistCard.module.css";

const WishlistCard = ({ item }) => {
  const { authState } = useAuth();
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  return (
    <article className={`card card__ecommerce ${styles.cardBody}`}>
      <Link to={`/product/${item._id}`} className="card__body">
        {item.discount !== "0" && (
          <div className="card__badge">
            <img
              className={`badge__icon icon-danger ${styles.badgeIconWidth}`}
              src={`${ICONS_URL}/bookmark.svg`}
              alt="bookmark-icon"
            />
            <span className={`card__discount ${styles.cardDiscount}`}>
              {item.discount}% OFF
            </span>
          </div>
        )}
        <img
          src={item.imageSrc}
          className={`card__img ${styles.cardImgAdjustment}`}
          alt="card-image"
        />
        <div className={`card__title ${styles.cardTitleWrapper}`}>
          <h1 title={item.title} className={`h-5 ${styles.cardTitle}`}>
            {item.title}
          </h1>
          <p className="caption">{item.vendor}</p>
        </div>
        <div className="card__content">
          <p className={`bd-5 ${styles.cardPrice}`}>
            ${item.discount !== "0" && <strike>{item.price}</strike>}
            {
              <span
                className={`card__content--newprice ${styles.cardNewPrice}`}
              >
                {item.discount === "0"
                  ? item.price
                  : (
                      item.price -
                      Number.parseFloat(item.price * (item.discount / 100))
                    ).toFixed(2)}
              </span>
            }
            /-
          </p>
          <div className={styles.rating}>
            <img
              className={`icon-light ${styles.ratingStar}`}
              src={`${ICONS_URL}/star-solid.svg`}
              alt="star"
            />
            {item.rating}
          </div>
        </div>
      </Link>
      <div className={`card__footer ${styles.cardFooter}`}>
        <div className={`card__footer--left ${styles.cardFooterLeft}`}>
          <button
            className={`button btn-sm btn-solid-primary card__button ${styles.buyBtn}`}
            onClick={() => {
              removeFromWishlistHandler(
                item,
                wishlistDispatch,
                authState.token
              );
              addToCartHandler(item, cartDispatch, authState);
            }}
          >
            Move to Cart $
            {item.discount !== "0"
              ? Number.parseFloat(item.price * (item.discount / 100)).toFixed(2)
              : item.price}
          </button>
          <button
            className={`button btn-solid-danger ${styles.removeBtn}`}
            onClick={() =>
              removeFromWishlistHandler(item, wishlistDispatch, authState.token)
            }
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </article>
  );
};

export { WishlistCard };
