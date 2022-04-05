import styles from "./ProductCarousel.module.css";

const ProductCarousel = () => {
  return (
    <figure className={styles.mainCarousel}>
      <img
        className={styles.mainCarouselImage}
        src="https://res.cloudinary.com/dbjdu0hvl/image/upload/v1649094818/VISKart/carousel-image_lelnek.webp"
        loading="lazy"
        alt="hero-image"
      />
      <figcaption className={`h-5 ${styles.mainCarouselCaption}`}>
        Fall Guys: Ultimate Knockout
      </figcaption>
    </figure>
  );
};

export { ProductCarousel };
