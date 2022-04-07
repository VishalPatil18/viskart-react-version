import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./CategoryFilter.module.css";
import { Category } from "../Category/Category";

const CategoryFilter = () => {
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
    <div className={styles.checkbox}>
      <fieldset className={styles.fieldset}>
        <legend className={`h-6 ${styles.sidebarItemTitle}`}>Category</legend>
        {categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </fieldset>
    </div>
  );
};

export { CategoryFilter };
