import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addToCartHandler,
  addToWishlistHandler,
  isInArrayList,
  removeFromWishlistHandler,
} from "../../utilities";
import { useCart, useAuth, useAuthModal, useWishlist } from "../../context";
import { ICONS_URL } from "../../constants";
import styles from "./GamesCard.module.css";

const GamesCard = ({ item }) => {
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authModalHandler } = useAuthModal();
  const [itemAdded, setItemAdded] = useState(
    isInArrayList(item, cartState.cart)
  );
  const [isWishlisted, setIsWishlisted] = useState(
    isInArrayList(item, wishlistState.wishlist)
  );

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
            <span className="card__discount">{item.discount}% OFF</span>
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
        </div>
      </Link>
      <div className={`card__footer ${styles.cardFooter}`}>
        <div className={`card__footer--left ${styles.cardFooterLeft}`}>
          {!itemAdded ? (
            <button
              className={`button btn-sm btn-solid-primary card__button ${styles.buyButton}`}
              onClick={() => {
                if (authState.token) {
                  setItemAdded(true);
                  return addToCartHandler(item, cartDispatch, authState);
                }
                toast.warning("You're not logged in");
                return authModalHandler("LOGIN");
              }}
            >
              Add to Cart - $
              {item.discount !== "0"
                ? (
                    item.price -
                    Number.parseFloat(item.price * (item.discount / 100))
                  ).toFixed(2)
                : item.price}
            </button>
          ) : (
            <Link
              to="/cart"
              className={`button btn-sm btn-solid-success card__button ${styles.buyButton}`}
            >
              Go to Cart
            </Link>
          )}
        </div>
        <div className={`card__footer--right ${styles.cardFooterRight}`}>
          <button
            className={`button ${styles.iconButton}`}
            onClick={() => {
              if (authState.token) {
                if (!isWishlisted) {
                  setIsWishlisted(true);
                  return addToWishlistHandler(
                    item,
                    wishlistDispatch,
                    authState.token
                  );
                } else {
                  setIsWishlisted(false);
                  return removeFromWishlistHandler(
                    item,
                    wishlistDispatch,
                    authState.token
                  );
                }
              }
              toast.warning("You're not logged in");
              return authModalHandler("LOGIN");
            }}
          >
            <img
              className="icon-sm icon-danger"
              src={`${ICONS_URL}/${
                isWishlisted ? "heart" : "heart-regular"
              }.svg`}
              alt="heart-icon"
            />
          </button>
          <button className={`button ${styles.iconButton}`}>
            <img
              className="icon-sm icon-success"
              src={`${ICONS_URL}/share.svg`}
              alt="share-icon"
            />
          </button>
          <button className={`button ${styles.iconButton}`}>
            <img
              className="icon-sm icon-primary"
              src={`${ICONS_URL}/menu.svg`}
              alt="menu-icon"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export { GamesCard };
