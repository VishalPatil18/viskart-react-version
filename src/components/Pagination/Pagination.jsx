import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <section className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        <li className={styles.leftSlider}>
          <img
            className={`icon-lg icon-dark ${styles.maincontent__sidebar__icon}`}
            src="https://vispaui-postdev-deploy.netlify.app/assets/angle-up.svg"
            loading="lazy"
            alt="angle-icon"
          />
        </li>
        <li className={`txt-center ${styles.pageNo}`}>1</li>
        <li className={`txt-center ${(styles.pageNo, styles.active)}`}>2</li>
        <li className={`txt-center ${styles.pageNo}`}>3</li>
        <li className="txt-center">...</li>
        <li className={`txt-center ${styles.pageNo}`}>12</li>
        <li className={`${styles.rightSlider}`}>
          <img
            className={`icon-lg icon-dark ${styles.maincontent__sidebar__icon}`}
            src="https://vispaui-postdev-deploy.netlify.app/assets/angle-up.svg"
            loading="lazy"
            alt="angle-icon"
          />
        </li>
      </div>
    </section>
  );
};

export { Pagination };
