import { GamesCard } from "../../components";
import { products } from "../../constants";
import styles from "./FeaturedGames.module.css";

const productsList = products.filter((item) => !item.isNew);

const FeaturedGames = ({ showingProductsCaption }) => {
  return (
    <div className={styles.featuredGamesWrapper}>
      <div className={styles.products_heading}>
        <h5 className="h-5">Featured Games</h5>
        <p className={styles.showingProductsCaption}>
          {showingProductsCaption}
        </p>
        <button className="st-1 button btn-plain btn-primary">See all</button>
      </div>
      <section className={styles.main_products}>
        {productsList.map((item) => (
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
