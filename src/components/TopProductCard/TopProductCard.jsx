import styles from "./TopProductCard.module.css";

const TopProductCard = ({ imageSrc, title, desc, price }) => {
  return (
    <article className={styles.topItem}>
      <img className={styles.topItemImage} src={imageSrc} alt={title} />
      <div className={styles.topItemDisc}>
        <p className="st-1">{title}</p>
        <p className="cp">{desc}</p>
      </div>
      <button
        className={`button btn-sm btn-solid-primary ${styles.topItemButton}`}
      >
        ${price}
      </button>
    </article>
  );
};

export { TopProductCard };
