import { Link } from "react-router-dom";
import styles from "./TopProductCard.module.css";

const TopProductCard = ({ id, imageSrc, title, desc, price }) => {
  return (
    <article className={styles.topItem}>
      <Link to={`/product/${id}`} className={styles.detailsWrapper}>
        <img className={styles.topItemImage} src={imageSrc} alt={title} />
        <div className={styles.topItemDisc}>
          <p className="st-1">{title}</p>
          <p className="cp">{desc}</p>
        </div>
      </Link>
      <button
        className={`button btn-sm btn-solid-primary ${styles.topItemButton}`}
      >
        ${price}
      </button>
    </article>
  );
};

export { TopProductCard };
