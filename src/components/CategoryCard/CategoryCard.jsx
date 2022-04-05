import { useNavigate } from "react-router";
import { useFilter } from "../../context";
import { categoryProductsHandler } from "../../utilities";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ imageSrc, categoryName }) => {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  return (
    <article
      className={styles.card}
      onClick={() =>
        categoryProductsHandler(categoryName, filterDispatch, navigate)
      }
    >
      <img
        src={imageSrc}
        alt={categoryName}
        loading="lazy"
        className={styles.cardImg}
      />
      <p className={styles.title}>{categoryName}</p>
    </article>
  );
};

export { CategoryCard };
