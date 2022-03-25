import { TopProductCard } from "../../components";
// import { useData } from "../../context";
import styles from "./TopProducts.module.css";

const TopProducts = () => {
  /**
   * NOTE: Comments are added for time being, would be fixed when the data context is implemented
   */
  // const { dataState } = useData();
  const products = dataState.products.filter((item) => item.isTop);

  return (
    <>
      <div className={styles.productsHeading}>
        <h5 className="h-5">Top Games</h5>
        <button className="st-1 button btn-plain btn-primary">See all</button>
      </div>
      <section className={styles.topProducts}>
        {products.map((item) => (
          <TopProductCard
            key={item._id}
            imageSrc={item.imageSrc}
            title={item.title}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </section>
    </>
  );
};

export { TopProducts };
