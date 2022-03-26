import { NewGamesCard } from "../../components";
// import { useData } from "../../context";
import styles from "./NewGames.module.css";

const NewGames = () => {
  /**
   * NOTE: Comments are added for time being, would be fixed when the data context is implemented
   */
  // const { dataState } = useData();
  const products = dataState.products.filter((item) => item.isLatest);

  return (
    <>
      <div className={styles.productsHeading}>
        <h5 className="h-5">New Games</h5>
        <button className="st-1 button btn-plain btn-primary">See all</button>
      </div>
      <section className={styles.newProducts}>
        {products.map((item) => (
          <NewGamesCard
            key={item._id}
            title={item.title}
            price={item.price}
            imageSrc={item.imageSrc}
          />
        ))}
      </section>
    </>
  );
};

export { NewGames };
