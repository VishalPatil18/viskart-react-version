import { useState } from "react";
import { Breadcrumb, FeaturedGames, Filters, Pagination } from "../components";
import styles from "./ProductListing.module.css";

const ProductListing = () => {
  const [filterMenu, setFilterMenu] = useState(false);

  return (
    <div className={styles.productsPage}>
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
