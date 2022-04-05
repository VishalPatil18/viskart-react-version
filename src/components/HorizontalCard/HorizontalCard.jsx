import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import {
  updateCartHandler,
  removeFromCartHandler,
  addToWishlistHandler,
  removeFromWishlistHandler,
  addToCartHandler,
} from "../../utilities";
import { ICONS_URL } from "../../constants";
import styles from "./HorizontalCard.module.css";
import { useState } from "react";

const HorizontalCard = ({ item }) => {
  const { authState } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { pathname } = useLocation();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [isInCart, setIsInCart] = useState(
    cartState.cart.some((cartItem) => item._id === cartItem._id)
  );
  const [isInWishlist, setIsInWishlist] = useState(
    wishlistState.wishlist.some((wishlistItem) => item._id === wishlistItem._id)
  );
  const navigate = useNavigate();

  return (
    <article className={styles.horizontalCard}>
      {item.discount !== "0" && (
        <div className={styles.cardBadge}>
          <img
            className="badge__icon icon-danger"
            src={`${ICONS_URL}/bookmark.svg`}
            loading="lazy"
            alt="bookmark-icon"
          />
          <span className={`card__discount ${styles.cardDiscount}`}>
            {item.discount}% OFF
          </span>
        </div>
      )}
      <Link
        to={`/product/${item._id}`}
        className={`card__body ${styles.imageWrapper}`}
      >
        <img
          className={styles.myItemImage}
          src={item.imageSrc}
          loading="lazy"
          alt={item.title}
        />
      </Link>
      <div className={styles.cardBody}>
        <div className={styles.cardTitleWrapper}>
          <Link to={`/product/${item._id}`} className="my-item__disc">
            <h5 className={`h-5 ${styles.cardTitle}`}>{item.title}</h5>
          </Link>
          <p className="bd-5">
            ${item.discount !== "0" && <strike>{item.price}</strike>}
            {
              <span className={styles.newPrice}>
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
          <button
            className={styles.wishlistBtn}
            onClick={() => {
              if (pathname === "/cart") {
                if (isInWishlist) {
                  navigate("/wishlist");
                } else {
                  removeFromCartHandler(item, cartDispatch, authState.token);
                  addToWishlistHandler(item, wishlistDispatch, authState.token);
                }
              } else {
                if (isInCart) {
                  navigate("/cart");
                } else {
                  removeFromWishlistHandler(
                    item,
                    wishlistDispatch,
                    authState.token
                  );
                  addToCartHandler(item, cartDispatch, authState.token);
                }
              }
            }}
          >
            {pathname === "/cart"
              ? isInWishlist
                ? "Go to Wishlist"
                : "Move to Wishlist"
              : isInCart
              ? "Go to Cart"
              : "Move to Cart"}
          </button>
        </div>
        <div className={styles.buttonsWrapper}>
          {pathname === "/cart" ? (
            <div className={styles.cardButtonWrapper}>
              <button
                className={`button ${styles.quantityButton} ${
                  item.qty <= 1 || btnDisabled ? styles.disabledBtn : null
                }`}
                onClick={() =>
                  updateCartHandler(
                    item,
                    cartDispatch,
                    authState.token,
                    "decrement",
                    setBtnDisabled
                  )
                }
                disabled={item.qty <= 1 || btnDisabled}
              >
                -
              </button>
              <p className={styles.quantityValue}>{item.qty}</p>
              <button
                className={`button ${styles.quantityButton} ${
                  btnDisabled ? styles.disabledBtn : null
                }`}
                onClick={() =>
                  updateCartHandler(
                    item,
                    cartDispatch,
                    authState.token,
                    "increment",
                    setBtnDisabled
                  )
                }
                disabled={btnDisabled}
              >
                +
              </button>
            </div>
          ) : null}
          <div>
            <button
              className={styles.deleteBtn}
              onClick={() =>
                pathname === "/cart"
                  ? removeFromCartHandler(item, cartDispatch, authState.token)
                  : removeFromWishlistHandler(
                      item,
                      wishlistDispatch,
                      authState.token
                    )
              }
            >
              <img
                className="icon-xl icon-danger"
                src={`${ICONS_URL}/trash-can-solid.svg`}
                loading="lazy"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export { HorizontalCard };
