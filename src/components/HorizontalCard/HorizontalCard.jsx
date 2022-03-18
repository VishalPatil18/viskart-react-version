import { ICONS_URL } from "../../constants";
import styles from "./HorizontalCard.module.css";

const HorizontalCard = ({ title, desc, price, discount, imageSrc }) => {
  return (
    <article className={styles.horizontalCard}>
      {discount !== "0" && <div className={styles.cardBadge}>
        <img
          className="badge__icon icon-danger"
          src={`${ICONS_URL}/bookmark.svg`}
          alt="bookmark-icon"
        />
        <span className="card__discount">{discount}% OFF</span>
      </div>}
      <img className={styles.myItemImage} src={imageSrc} alt={title} />
      <div className={styles.cardBody}>
        <div className="my-item__disc">
          <h5 className={`h-5 ${styles.cardTitle}`}>{title}</h5>
          <p className="bd-5">{desc}</p>
        </div>
        <p className="bd-5">
          ${discount !== "0" && <strike>{price}</strike>}
          {
            <span className={styles.newPrice}>
              {discount === "0"
                ? price
                : (price -
                  Number.parseFloat(price * (discount / 100))).toFixed(2)}
            </span>
          }
          /-
        </p>
        <div className={styles.cardButtonWrapper}>
          <button className={`button btn-solid-danger ${styles.topItemButton}`}>
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
