import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TopProductCard } from "../../components";
import { productsService } from "../../services";
import styles from "./TopProducts.module.css";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await productsService();
        if (response.status === 200) {
          const products = response.data.products;
          setTopProducts(products.filter((item) => item.isTop));
        }
      } catch (error) {
        toast.warning("Something went Wrong! Please try again later");
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.productsHeading}>
        <h5 className="h-5">Shop top Games</h5>
        <Link to="/products" className="st-1 button btn-plain btn-primary">
          See all
        </Link>
      </div>
      <section className={styles.topProducts}>
        {topProducts.map((item) => (
          <TopProductCard
            key={item._id}
            id={item._id}
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
