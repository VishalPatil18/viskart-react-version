import { ASSETS_URL } from "../../constants";
import styles from "./ProductCarousel.module.css";

const ProductCarousel = () => {
  return (
    <figure className={styles.mainCarousel}>
      <img
        className={styles.mainCarouselImage}
        src={`${ASSETS_URL}/carousel-image.webp`}
        alt="hero-image"
      />
      <figcaption className={`h-5 ${styles.mainCarouselCaption}`}>
        Fall Guys: Ultimate Knockout
      </figcaption>
    </figure>
  );
};

export { ProductCarousel };
