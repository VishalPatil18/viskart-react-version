import {
  ProductCarousel,
  TopProducts,
  NewGames,
  FeaturedGames,
} from "../components";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

const Home = ({ cname }) => {
  return (
    <div className={cname}>
      <ProductCarousel />
      <TopProducts />
      <NewGames />
      <FeaturedGames isHomePage={true} />
      <div className={(styles.productHeading, styles.seeAllGames)}>
        <Link to="/products" className="st-1 button btn-plain btn-primary">
          See all Games
        </Link>
      </div>
    </div>
  );
};

export { Home };
