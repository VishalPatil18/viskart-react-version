import { useEffect, useState } from "react";
import { GamesCard } from "../../components";
import { useFilter, useLoader } from "../../context";
import { productsService } from "../../services";
import { filterHandler } from "../../utilities";
import styles from "./FeaturedGames.module.css";

let filteredProducts = [];
const FeaturedGames = ({ isHomePage = false }) => {
  const [data, setData] = useState([]);
  const { filterState } = useFilter();
  const { setLoader } = useLoader();

  filteredProducts = filterHandler(
    data,
    filterState.sortBy,
    filterState.categories,
    filterState.rating,
    filterState.priceRange
  );

  useEffect(() => {
    setLoader(true);
    (async () => {
      try {
        const response = await productsService();
        setData(response.data.products);
        setTimeout(() => setLoader(false), 1000);
      } catch (error) {
        setLoader(false);
        toast.warning(error.response.data.errors[0]);
      }
    })();
  }, []);

  return (
    <div className={styles.featuredGamesWrapper}>
      <div className={styles.products_heading}>
        <h5 className="h-5">Featured Games</h5>
        <p className={styles.showingProductsCaption}>
          {!isHomePage && `(showing ${filteredProducts.length} products)`}
        </p>
        <button className="st-1 button btn-plain btn-primary">See all</button>
      </div>
      <section className={styles.main_products}>
        {filteredProducts.map((item) => (
          <GamesCard key={item._id} item={item} />
        ))}
      </section>
    </div>
  );
};

export { FeaturedGames };
