import { useFilter } from "../../context";
import styles from "./PriceSliderFilter.module.css";

const PriceSliderFilter = () => {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className={`slider__container sl-sm ${styles.sidebarPrice}`}>
      <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Price</h6>
      <div className={`cp ${styles.priceLabel}`}>
        <span>$50</span>
        <span>$100</span>
        <span>$150</span>
        <span>$200</span>
        <span>$250</span>
        <span>All</span>
      </div>
      <input
        type="range"
        min="50"
        max="300"
        step="50"
        className="slider"
        value={Number(filterState.priceRange)}
        onChange={(e) =>
          filterDispatch({
            type: "PRICE_RANGE",
            payload: {
              priceRange: e.target.value,
            },
          })
        }
      />
    </div>
  );
};

export { PriceSliderFilter };
