import { useEffect, useState } from "react";
import { Breadcrumb, FeaturedGames, Filters, Pagination } from "../components";
import { scrollToTop } from "../utilities";
import styles from "./ProductListing.module.css";

const ProductListing = () => {
  const [filterMenu, setFilterMenu] = useState(false);

  useEffect(scrollToTop, []);

  return (
    <div className={styles.productsPage} id="mainBody">
      <Breadcrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />

      <div className={styles.productsWrapper}>
        <Filters
          cname={`${styles.sidebar} ${filterMenu ? styles.openSidebar : ""}`}
        />
        <button
          className={`button btn-solid-dark ${styles.filtersBtn}`}
          onClick={() => setFilterMenu((prevState) => !prevState)}
        >
          {filterMenu ? "Close Filters" : "Filters"}
        </button>

        <div className={styles.mainBody}>
          <FeaturedGames />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export { ProductListing };
