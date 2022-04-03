import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import styles from "./CategoriesCarousel.module.css";

const CategoriesCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.productsHeading}>
        <h5 className="h-5">Shop by Category</h5>
        <Link to="/products" className="st-1 button btn-plain btn-primary">
          See all
        </Link>
      </div>

      <section className={styles.carousel}>
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            imageSrc={category.imageSrc}
            categoryName={category.categoryName}
          />
        ))}
      </section>
    </>
  );
};

export { CategoriesCarousel };
