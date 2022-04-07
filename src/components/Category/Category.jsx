import { useEffect, useState } from "react";
import { useFilter } from "../../context";
import { ICONS_URL } from "../../constants";
import styles from "./Category.module.css";

const Category = ({ category }) => {
  const { filterState, filterDispatch } = useFilter();

  const [isChecked, setIsChecked] = useState(
    filterState.categories.find(
      (currCategory) => currCategory === category.categoryName
    )
      ? true
      : false
  );

  useEffect(() => {
    setIsChecked(
      filterState.categories.find(
        (currCategory) => currCategory === category.categoryName
      )
        ? true
        : false
    );
  }, [filterState]);

  return (
    <label
      className={`radio__label ${styles.categoryName}  ${
        isChecked ? styles.selected : ""
      }`}
      htmlFor={category.categoryName}
      key={category._id}
    >
      <input
        className={`input__field--checkbox ${styles.input}`}
        type="checkbox"
        id={category.categoryName}
        checked={isChecked}
        onChange={(e) => {
          filterDispatch({
            type: "CATEGORISE",
            payload: {
              categories: (() => {
                if (!isChecked) {
                  setIsChecked(true);
                  return [...filterState.categories, category.categoryName];
                } else {
                  setIsChecked(false);
                  return filterState.categories.filter(
                    (currCategory) => currCategory !== category.categoryName
                  );
                }
              })(),
            },
          });
        }}
      />
      {isChecked ? (
        <img
          className={`icon-sm icon-light`}
          src={`${ICONS_URL}/check.svg`}
          alt="check"
        />
      ) : (
        <></>
      )}
      {category.categoryName}
    </label>
  );
};

export { Category };
