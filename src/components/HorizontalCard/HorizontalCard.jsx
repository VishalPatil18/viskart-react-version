import { useAuth } from "../../context";
import { addToCartHandler, removeFromCartHandler } from "../../utilities";
import { ICONS_URL } from "../../constants";
import styles from "./HorizontalCard.module.css";

const HorizontalCard = ({ item }) => {
  const { authDispatch } = useAuth();
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
      <img
        className={styles.myItemImage}
        src={item.imageSrc}
        alt={item.title}
      />
      <div className={styles.cardBody}>
        <div className="my-item__disc">
          <h5 className={`h-5 ${styles.cardTitle}`}>{item.title}</h5>
          <p className="bd-5">{item.desc}</p>
        </div>
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
            className={`button ${styles.quantityButton}`}
            onClick={() => removeFromCartHandler(item, authDispatch, false)}
          >
            -
          </button>
          <p className={styles.quantityValue}>{item.quantity}</p>
          <button
            className={`button ${styles.quantityButton}`}
            onClick={() => addToCartHandler(item, authDispatch)}
          >
            +
          </button>
        </div>
        <div className={styles.cardButtonWrapper}>
          <button
            className={`button btn-solid-danger ${styles.topItemButton}`}
            onClick={() => removeFromCartHandler(item, authDispatch, true)}
          >
            Remove
          </button>
          <button
            className={`button btn-solid-primary ${styles.topItemButton}`}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </article>
  );
};

export { HorizontalCard };
