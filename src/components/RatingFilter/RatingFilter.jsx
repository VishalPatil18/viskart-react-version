import { useFilter } from "../../context";
import styles from "./RatingFilter.module.css";

const RatingFilter = () => {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className={styles.checkbox}>
      <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Rating</h6>
      {[4, 3, 2, 1].map((rating) => (
        <div className="radio-item" key={rating}>
          <input
            className="input__field--radio"
            name="rating"
            type="radio"
            id={rating}
            checked={filterState.rating === rating}
            onChange={() => {
              return filterDispatch({
                type: "RATING",
                payload: {
                  ...filterState,
                  rating: rating,
                },
              });
            }}
          />
          <label className="radio__label" htmlFor={rating}>
            {rating} Stars & above
          </label>
        </div>
      ))}
    </div>
  );
};

export { RatingFilter };
