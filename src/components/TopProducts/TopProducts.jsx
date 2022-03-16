import { ASSETS_URL } from "../../constants";
import { TopProductCard } from "../../components";
import { products } from "../../constants";
import styles from "./TopProducts.module.css";

const productsList = products.filter((item) => item.isTop);

const TopProducts = () => {
  return (
    <>
      <div className={styles.productsHeading}>
        <h5 className="h-5">Top Games</h5>
        <button className="st-1 button btn-plain btn-primary">See all</button>
      </div>
      <section className={styles.topProducts}>
        {productsList.map((item) => (
          <TopProductCard
            key={item.id}
            imageSrc={`${ASSETS_URL}${item.imageSrc}`}
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
