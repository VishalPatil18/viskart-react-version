import { useNavigate } from "react-router";
import { useAuth, useCart, useWishlist } from "../context";
import { logoutHandler } from "../utilities/logoutHandler";
import styles from "./User.module.css";

const User = ({ cname }) => {
  const { authState, authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  return (
    <section className={cname}>
      {authState.user && (
        <p className={styles.greet}>Hello, {authState.user.username}👋</p>
      )}
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

export { User };
