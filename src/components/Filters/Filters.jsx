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
        <h5 className="h-5">Filters</h5>
        <button
          className="button btn-plain btn-sm btn-danger"
          onClick={() =>
            filterDispatch({
              type: "INITIALIZE_FILTERS",
            })
          }
        >
          Clear
        </button>
      </div>
      <PriceSliderFilter />
      <SortByPriceFilter />
      <CategoryFilter />
      <RatingFilter />
    </aside>
  );
};

export { Filters };
