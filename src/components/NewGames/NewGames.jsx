import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { NewGamesCard } from "../../components";
import { productsService } from "../../services";
import styles from "./NewGames.module.css";

const NewGames = () => {
  const [newGames, setNewGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await productsService();
        if (response.status === 200) {
          const products = response.data.products;
          setNewGames(products.filter((item) => item.isLatest));
        }
      } catch (error) {
        toast.warning("Something went Wrong! Please try again later");
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.productsHeading}>
        <h5 className="h-5">Shop new Games</h5>
        <Link to="/products" className="st-1 button btn-plain btn-primary">
          See all
        </Link>
      </div>
      <section className={styles.newProducts}>
        {newGames.map((item) => (
          <NewGamesCard
            key={item._id}
            id={item._id}
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
