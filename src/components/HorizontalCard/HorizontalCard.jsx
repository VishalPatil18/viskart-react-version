import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import {
  updateCartHandler,
  removeFromCartHandler,
  addToWishlistHandler,
} from "../../utilities";
import { ICONS_URL } from "../../constants";
import styles from "./HorizontalCard.module.css";
import { useState } from "react";

const HorizontalCard = ({ item }) => {
  const { authState } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const [btnDisabled, setBtnDisabled] = useState(false);

  return (
    <article className={styles.horizontalCard}>
      {item.discount !== "0" && (
        <div className={styles.cardBadge}>
          <img
            className="badge__icon icon-danger"
            src={`${ICONS_URL}/bookmark.svg`}
            alt="bookmark-icon"
          />
          <span className="card__discount">{item.discount}% OFF</span>
        </div>
      )}
      <Link to={`/product/${item._id}`} className="card__body">
        <img
          className={styles.myItemImage}
          src={item.imageSrc}
          alt={item.title}
        />
      </Link>
      <div className={styles.cardBody}>
        <Link to={`/product/${item._id}`} className="my-item__disc">
          <h5 className={`h-5 ${styles.cardTitle}`}>{item.title}</h5>
          <p className="bd-5">{item.desc}</p>
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
        <div className={styles.cardButtonWrapper}>
          <button
            className={`button btn-solid-danger ${styles.topItemButton}`}
            onClick={() =>
              removeFromCartHandler(item, cartDispatch, authState.token)
            }
          >
            Remove
          </button>
          <button
            className={`button btn-solid-primary ${styles.topItemButton}`}
            onClick={() => {
              removeFromCartHandler(item, cartDispatch, authState.token);
              addToWishlistHandler(item, wishlistDispatch, authState.token);
            }}
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </article>
  );
};

export { HorizontalCard };
