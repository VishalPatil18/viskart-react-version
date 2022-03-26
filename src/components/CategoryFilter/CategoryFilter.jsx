import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "../../context";
import styles from "./CategoryFilter.module.css";

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const { filterState, filterDispatch } = useFilter();

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
      <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Category</h6>
      {categories.map((category) => (
        <label
          className={`radio__label ${styles.categoryName}`}
          htmlFor={category.categoryName}
          key={category._id}
        >
          <input
            className={"input__field--checkbox"}
            type="checkbox"
            id={category.categoryName}
            checked={(() => {
              return filterState.categories.find(
                (currCategory) => currCategory === category.categoryName
              )
                ? true
                : false;
            })()}
            onChange={(e) => {
              filterDispatch({
                type: "CATEGORISE",
                payload: {
                  categories: (() => {
                    if (e.target.checked) {
                      return [...filterState.categories, category.categoryName];
                    } else {
                      return filterState.categories.filter(
                        (currCategory) => currCategory !== category.categoryName
                      );
                    }
                  })(),
                },
              });
            }}
          />
          {category.categoryName}
        </label>
      ))}
    </div>
  );
};

export { CategoryFilter };
