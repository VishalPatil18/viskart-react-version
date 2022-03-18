import { GamesCard } from "../../components";
import styles from "./FeaturedGames.module.css";
import { useData } from "../../context/dataContext";

const FeaturedGames = ({ isHomePage = false }) => {
  const { dataState, dataDispatch } = useData();
  let products = dataState.products.sort(() => (Math.random() > 0.5 ? 1 : -1));
  if (isHomePage) {
    products = dataState.products.slice(0, 12);
  }

  return (
    <div className={styles.featuredGamesWrapper}>
      <div className={styles.products_heading}>
        <h5 className="h-5">Featured Games</h5>
        <p className={styles.showingProductsCaption}>
          {!isHomePage && `(showing ${products.length} products)`}
        </p>
        <button className="st-1 button btn-plain btn-primary">See all</button>
      </div>
      <section className={styles.main_products}>
        {products.map((item) => (
          <GamesCard
            title={item.title}
            vendor={item.vendor}
            imageSrc={item.imageSrc}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </section>
    </div>
  );
};

export { FeaturedGames };
