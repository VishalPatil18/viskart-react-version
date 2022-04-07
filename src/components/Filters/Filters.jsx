import {
  PriceSliderFilter,
  SortByPriceFilter,
  CategoryFilter,
  RatingFilter,
} from "../../components";
import { useFilter } from "../../context";
import styles from "./Filters.module.css";

const Filters = ({ cname }) => {
  const { filterDispatch } = useFilter();
  return (
    <aside className={cname}>
      <div className={styles.sidebarTitle}>
        <CategoryFilter />
      </div>
      <fieldset className={styles.fieldset}>
        <legend className="h-5">Filters</legend>
        <button
          className={`button btn-sm ${styles.clearBtn}`}
          onClick={() =>
            filterDispatch({
              type: "INITIALIZE_FILTERS",
            })
          }
        >
          Clear Filters
        </button>
        <PriceSliderFilter />
        <SortByPriceFilter />
        <RatingFilter />
      </fieldset>
    </aside>
  );
};

export { Filters };
