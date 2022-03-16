import { ASSETS_URL } from "../../constants";
import styles from "./NewGamesCard.module.css";

const NewGamesCard = ({ title, price, imageSrc }) => {
  return (
    <article className={styles.newItem}>
      <img
        className={styles.newItemImage}
        src={`${ASSETS_URL}${imageSrc}`}
        alt={title}
      />
      <div className={styles.newItemDisc}>
        <p className="st-2">{title}</p>
      </div>
      <button
        className={`button btn-sm btn-solid-primary ${styles.newItemButton}`}
      >
        ${price}
      </button>
    </article>
  );
};

export { NewGamesCard };
