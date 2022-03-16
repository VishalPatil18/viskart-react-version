import { ICONS_URL } from "../../constants";
import styles from "./Filters.module.css";

const Filters = ({ cname }) => {
  return (
    <aside className={cname}>
      <button className={`button btn-plain ${styles.sidebarCloseBtn}`}>
        <img
          className="icon-md icon-dark drawer__item--icon"
          src={`${ICONS_URL}/times.svg`}
          alt="close"
        />
      </button>
      <div className={styles.sidebarTitle}>
        <h5 className="h-5">Filters</h5>
        <button className="button btn-plain btn-sm btn-danger">Clear</button>
      </div>
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
        <input type="range" min="50" max="300" step="50" className="slider" />
      </div>
      <div className="checkbox">
        <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Sort by</h6>
        <div className={styles.radioItem}>
          <input
            className="input__field--radio"
            name="sorting"
            type="radio"
            checked
            id="lowtohigh"
          />
          <label className="radio__label" for="lowtohigh">
            Price - Low to High
          </label>
        </div>

        <div className={styles.radioItem}>
          <input
            className="input__field--radio"
            name="sorting"
            type="radio"
            id="hightolow"
          />
          <label className="radio__label" for="hightolow">
            Price - High to Low
          </label>
        </div>
      </div>
      <div className={styles.checkbox}>
        <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Category</h6>
        <label className="radio__label" for="computer">
          <input
            className="input__field--checkbox"
            id="computer"
            name="checked"
            type="checkbox"
          />
          Computer Games
        </label>
        <label className="radio__label" for="playstation">
          <input
            className="input__field--checkbox"
            id="playstation"
            name="unchecked"
            type="checkbox"
          />
          PlayStation Games
        </label>
        <label className="radio__label" for="xbox">
          <input
            className="input__field--checkbox"
            id="xbox"
            name="unchecked"
            type="checkbox"
          />
          X-Box Games
        </label>
        <label className="radio__label" for="arvr">
          <input
            className="input__field--checkbox"
            id="arvr"
            name="unchecked"
            type="checkbox"
          />
          AR/VR Games
        </label>
      </div>
      <div className={styles.checkbox}>
        <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Brand</h6>
        <label className="radio__label" for="eagames">
          <input
            className="input__field--checkbox"
            id="eagames"
            name="checked"
            type="checkbox"
          />
          EA Games
        </label>
        <label className="radio__label" for="nintendo">
          <input
            className="input__field--checkbox"
            id="nintendo"
            name="checked"
            type="checkbox"
          />
          Nintendo
        </label>
        <label className="radio__label" for="rockstargames">
          <input
            className="input__field--checkbox"
            id="rockstargames"
            name="unchecked"
            type="checkbox"
          />
          Rockstar Games
        </label>
        <label className="radio__label" for="ubisoft">
          <input
            className="input__field--checkbox"
            id="ubisoft"
            name="unchecked"
            type="checkbox"
          />
          Ubisoft
        </label>
        <label className="radio__label" for="activision">
          <input
            className="input__field--checkbox"
            id="activision"
            name="unchecked"
            type="checkbox"
          />
          Activision Blizzard
        </label>
      </div>
      <div className={styles.checkbox}>
        <h6 className={`h-6 ${styles.sidebarItemTitle}`}>Rating</h6>
        <div className="radio-item">
          <input
            className="input__field--radio"
            name="rating"
            type="radio"
            checked
            id="stars4"
          />
          <label className="radio__label" for="stars4">
            4 Stars & above
          </label>
        </div>

        <div className="radio-item">
          <input
            className="input__field--radio"
            name="rating"
            type="radio"
            id="stars3"
          />
          <label className="radio__label" for="stars3">
            3 Stars & above
          </label>
        </div>

        <div className="radio-item">
          <input
            className="input__field--radio"
            name="rating"
            type="radio"
            id="stars2"
          />
          <label className="radio__label" for="stars2">
            2 Stars & above
          </label>
        </div>

        <div className="radio-item">
          <input
            className="input__field--radio"
            name="rating"
            type="radio"
            id="stars1"
          />
          <label className="radio__label" for="stars1">
            1 Stars & above
          </label>
        </div>
      </div>
    </aside>
  );
};

export { Filters };
