import {
  ProductCarousel,
  TopProducts,
  NewGames,
  FeaturedGames,
  CategoriesCarousel,
  WhyShopWithUs,
} from "../components";
import { Link, useNavigate } from "react-router-dom";
import styles from "../App.module.css";

const Home = ({ cname }) => {
  const navigate = useNavigate();

  return (
    <div className={`${cname} ${styles.mainPaddingBottom}`} id="mainBody">
      <ProductCarousel />
      <CategoriesCarousel />
      <TopProducts />

      <img
        className={styles.bannerImg}
        onClick={() => navigate("/products")}
        src="https://res.cloudinary.com/dbjdu0hvl/image/upload/v1649094668/VISKart/banner_uaeijz.webp"
        loading="lazy"
      />

      <NewGames />
      <FeaturedGames isHomePage={true} />
      <div className={(styles.productHeading, styles.seeAllGames)}>
        <Link to="/products" className="st-1 button btn-plain btn-primary">
          See all Games
        </Link>
      </div>
      <WhyShopWithUs />
    </div>
  );
};

export { Home };
