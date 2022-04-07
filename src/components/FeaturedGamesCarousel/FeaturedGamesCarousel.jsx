import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GamesCard } from "../../components";
import { useLoader } from "../../context";
import { productsService } from "../../services";
import styles from "./FeaturedGamesCarousel.module.css";

const FeaturedGamesCarousel = () => {
  const [data, setData] = useState([]);
  const { setLoader } = useLoader();

  useEffect(() => {
    setLoader(true);
    (async () => {
      try {
        const response = await productsService();
        setData(response.data.products.slice(0, 8));
        setTimeout(() => setLoader(false), 1000);
        if (pathname === "/") {
          setPaginatedData(response.data.products.slice(0, 8));
        }
      } catch (error) {
        setLoader(false);
        toast.warning(error.response.data.errors[0]);
      }
    })();
  }, []);

  return (
    <div className={styles.featuredGamesWrapper}>
      <div className={styles.productsHeading}>
        <h5 className="h-5">Featured Games</h5>
        <Link to="/products" className="st-1 button btn-plain btn-primary">
          See all
        </Link>
      </div>
      <section className={styles.mainProducts}>
        {data.length > 0 ? (
          data.map((item) => <GamesCard key={item._id} item={item} />)
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export { FeaturedGamesCarousel };
