import { useEffect, useState } from "react";
import { useFilter } from "../../context";
import { ICONS_URL } from "../../constants";
import styles from "./SortByPriceFilter.module.css";

const SortByPriceFilter = () => {
  const { filterState, filterDispatch } = useFilter();
  const [selectedPrice, setSelectedPrice] = useState(filterState.sortBy);

  useEffect(() => {
    setSelectedPrice(filterState.sortBy);
  }, [filterState]);

  return (
    <div className="checkbox">
      <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Sort by Price</h6>
      <div className={styles.radioItem}>
        <input
          className={`input__field--radio ${styles.radioInput}`}
          name="sorting"
          type="radio"
          id="low-to-high"
          checked={filterState.sortBy === "low-to-high"}
          onChange={() => {
            setSelectedPrice("low-to-high");
            filterDispatch({
              type: "SORT_BY",
              payload: {
                ...filterState,
                sortBy: "low-to-high",
              },
            });
          }}
        />
        <label
          className={`radio__label ${styles.label}  ${
            selectedPrice === "low-to-high" ? styles.active : ""
          }`}
          htmlFor="low-to-high"
        >
          {selectedPrice === "low-to-high" ? (
            <img
              className={`icon-sm icon-light`}
              src={`${ICONS_URL}/check.svg`}
              alt="check"
            />
          ) : (
            <></>
          )}
          Low to High
        </label>
      </div>

      <div className={styles.radioItem}>
        <input
          className={`input__field--radio ${styles.radioInput}`}
          name="sorting"
          type="radio"
          id="high-to-low"
          checked={filterState.sortBy === "high-to-low"}
          onChange={() => {
            setSelectedPrice("high-to-low");
            filterDispatch({
              type: "SORT_BY",
              payload: {
                ...filterState,
                sortBy: "high-to-low",
              },
            });
          }}
        />
        <label
          className={`radio__label ${styles.label}  ${
            selectedPrice === "high-to-low" ? styles.active : ""
          }`}
          htmlFor="high-to-low"
        >
          {selectedPrice === "high-to-low" ? (
            <img
              className={`icon-sm icon-light`}
              src={`${ICONS_URL}/check.svg`}
              alt="check"
            />
          ) : (
            <></>
          )}
          High to Low
        </label>
      </div>
    </div>
  );
};

export { SortByPriceFilter };
