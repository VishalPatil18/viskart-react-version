import { Link } from "react-router-dom";
import styles from "./NewGamesCard.module.css";

const NewGamesCard = ({ id, title, price, imageSrc }) => {
  return (
    <article className={styles.newItem}>
      <Link to={`/product/${id}`} className={styles.detailsWrapper}>
        <img
          className={styles.newItemImage}
          src={imageSrc}
          loading="lazy"
          alt={title}
        />
        <div className={styles.newItemDisc}>
          <p className={`st-2 ${styles.title}`}>{title}</p>
        </div>
      </Link>
      <button className={`button btn-sm btn-solid-primary ${styles.buyBtn}`}>
        ${price}
      </button>
    </article>
  );
};

export { NewGamesCard };
