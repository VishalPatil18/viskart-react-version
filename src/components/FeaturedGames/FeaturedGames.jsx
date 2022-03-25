import { useEffect, useState } from "react";
import { GamesCard } from "../../components";
import { useFilter } from "../../context";
import { productsService } from "../../services";
import { filterHandler } from "../../utilities";
import styles from "./FeaturedGames.module.css";

let filteredProducts = [];
const FeaturedGames = ({ isHomePage = false }) => {
  const [data, setData] = useState([]);
  const { filterState } = useFilter();

  useEffect(() => {
    (async () => {
      try {
        const response = await productsService();
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  filteredProducts = filterHandler(
    data,
    filterState.sortBy,
    filterState.categories,
    filterState.rating,
    filterState.priceRange
  );

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
