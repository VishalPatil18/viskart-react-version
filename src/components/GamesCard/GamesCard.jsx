import { ASSETS_URL, ICONS_URL } from "../../constants";
import styles from "./GamesCard.module.css";

const GamesCard = ({ title, vendor, imageSrc, price, discount }) => {
  return (
    <article className={`card card__ecommerce ${styles.cardBody}`}>
      <div className="card__body">
        <div className="card__badge">
          <img
            className={`badge__icon icon-danger ${styles.badgeIconWidth}`}
            src={`${ICONS_URL}/bookmark.svg`}
            alt="bookmark-icon"
          />
          <span className="card__discount">{discount}% OFF</span>
        </div>
        <img
          src={`${ASSETS_URL}${imageSrc}`}
          className={`card__img ${styles.cardImgAdjustment}`}
          alt="card-image"
        />
        <div className={`card__title ${styles.cardTitle}`}>
          <h1 className="h-5">{title}</h1>
          <p className="caption">{vendor}</p>
        </div>
        <div className="card__content">
          <p className={`bd-5 ${styles.cardPrice}`}>
            ${discount === "0" ? price : <strike>{price}</strike>}
            {discount !== "0" && (
              <span
                className={`card__content--newprice ${styles.cardNewPrice}`}
              >
                {Number.parseFloat(price * (discount / 100)).toFixed(2)}
              </span>
            )}
            /-
          </p>
        </div>
      </div>
      <div className={`card__footer ${styles.cardFooter}`}>
        <div className={`card__footer--left ${styles.cardFooterLeft}`}>
          <button
            className={`button btn-sm btn-solid-primary card__button ${styles.buyButton}`}
          >
            Add to Cart $
            {discount !== "0"
              ? Number.parseFloat(price * (discount / 100)).toFixed(2)
              : price}
          </button>
        </div>
        <div className={`card__footer--right ${styles.cardFooterRight}`}>
          <button className={`button ${styles.iconButton}`}>
            <img
              className="icon-sm icon-danger"
              src={`${ICONS_URL}/heart.svg`}
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
