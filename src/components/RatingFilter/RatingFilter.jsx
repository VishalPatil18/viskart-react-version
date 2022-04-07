import { useEffect, useState } from "react";
import { useFilter } from "../../context";
import { ICONS_URL } from "../../constants";
import styles from "./RatingFilter.module.css";

const RatingFilter = () => {
  const { filterState, filterDispatch } = useFilter();
  const [selectedRating, setSelectedRating] = useState(filterState.rating);

  useEffect(() => {
    setSelectedRating(filterState.rating);
  }, [filterState]);

  return (
    <div className={styles.checkbox}>
      <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Rating</h6>
      {[4, 3, 2, 1].map((rating) => (
        <div className={`radio-item ${styles.ratingItem}`} key={rating}>
          <input
            className={`input__field--radio ${styles.radioInput}`}
            name="rating"
            type="radio"
            id={rating}
            checked={filterState.rating === rating}
            onChange={() => {
              setSelectedRating(rating);
              return filterDispatch({
                type: "RATING",
                payload: {
                  ...filterState,
                  rating: rating,
                },
              });
            }}
          />
          <label
            className={`radio__label ${styles.label} ${
              selectedRating == rating ? styles.active : ""
            }`}
            htmlFor={rating}
          >
            {selectedRating == rating ? (
              <img
                className={`icon-sm icon-light`}
                src={`${ICONS_URL}/check.svg`}
                alt="check"
              />
            ) : (
              <></>
            )}
            {rating} Stars & above
          </label>
        </div>
      ))}
    </div>
  );
};

export { RatingFilter };
