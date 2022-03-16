import { NewGamesCard } from "../../components";
import { products } from "../../constants";
import styles from "./NewGames.module.css";

let productsList = products.filter((item) => item.isLatest);
productsList = [...productsList, ...productsList, ...productsList];

const NewGames = () => {
  return (
    <>
      <div className={styles.productsHeading}>
        <h5 className="h-5">New Games</h5>
        <button className="st-1 button btn-plain btn-primary">See all</button>
      </div>
      <section className={styles.newProducts}>
        {productsList.map((item) => (
          <NewGamesCard
            key={item.id}
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
