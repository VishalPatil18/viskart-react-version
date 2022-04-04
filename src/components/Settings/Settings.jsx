import { useNavigate } from "react-router";
import { useAuth, useCart, useWishlist } from "../../context";
import { logoutHandler } from "../../utilities";
import styles from "./Settings.module.css";

const Settings = () => {
  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <img
        src="https://res.cloudinary.com/dbjdu0hvl/image/upload/v1649098523/VISKart/byeHaveAGreatTime2_pj19ao.jpg"
        loading="lazy"
        alt="logout"
      />
      <button
        className="button btn-solid-primary"
        onClick={() =>
          logoutHandler(authDispatch, cartDispatch, wishlistDispatch, navigate)
        }
      >
        Logout
      </button>
    </section>
  );
};

export { Settings };
