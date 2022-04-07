import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, pageNo, setPage }) => {
  return (
    <section className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        <li
          className={`${styles.leftSlider} ${
            pageNo <= 1 ? styles.disable : ""
          }`}
          onClick={() =>
            setPage((prevState) => ({ ...prevState, pageNo: pageNo - 1 }))
          }
        >
          <img
            className={`icon-lg icon-dark ${styles.maincontent__sidebar__icon}`}
            src="https://vispaui-postdev-deploy.netlify.app/assets/angle-up.svg"
            loading="lazy"
            alt="angle-icon"
          />
        </li>
        {[...Array(totalPages)].map((currPage, index) => {
          return (
            <li
              key={index + 1}
              className={`txt-center ${styles.pageNo} ${
                pageNo === index + 1 ? styles.active : ""
              }`}
              onClick={() =>
                setPage((prevState) => ({ ...prevState, pageNo: index + 1 }))
              }
            >
              {index + 1}
            </li>
          );
        })}
        <li
          className={`${styles.rightSlider} ${
            pageNo === totalPages ? styles.disable : ""
          }`}
          onClick={() =>
            setPage((prevState) => ({ ...prevState, pageNo: pageNo + 1 }))
          }
        >
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
