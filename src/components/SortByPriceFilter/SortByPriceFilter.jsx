import { useFilter } from "../../context";
import styles from "./SortByPriceFilter.module.css";

const SortByPriceFilter = () => {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className="checkbox">
      <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Sort by Price</h6>
      <div className={styles.radioItem}>
        <input
          className="input__field--radio"
          name="sorting"
          type="radio"
          id="low-to-high"
          checked={filterState.sortBy === "low-to-high"}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY",
              payload: {
                ...filterState,
                sortBy: "low-to-high",
              },
            })
          }
        />
        <label className="radio__label" htmlFor="low-to-high">
          Low to High
        </label>
      </div>

      <div className={styles.radioItem}>
        <input
          className="input__field--radio"
          name="sorting"
          type="radio"
          id="high-to-low"
          checked={filterState.sortBy === "high-to-low"}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY",
              payload: {
                ...filterState,
                sortBy: "high-to-low",
              },
            })
          }
        />
        <label className="radio__label" htmlFor="high-to-low">
          High to Low
        </label>
      </div>
    </div>
  );
};

export { SortByPriceFilter };
