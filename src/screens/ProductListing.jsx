import { FilterProvider } from "../context";
import { Breadcrumb, FeaturedGames, Filters, Pagination } from "../components";
import styles from "./ProductListing.module.css";

const ProductListing = () => {
  return (
    <div className={styles.productsPage}>
      <Breadcrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />
      <FilterProvider>
        <div className={styles.productsWrapper}>
          <Filters cname={styles.sidebar} />
          <div className={styles.mainBody}>
            <FeaturedGames />
            <Pagination />
          </div>
        </div>
      </FilterProvider>
    </div>
  );
};

export { ProductListing };
