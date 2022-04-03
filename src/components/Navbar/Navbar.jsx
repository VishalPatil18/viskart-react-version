import { AuthModal } from "../../components";
import { ASSETS_URL, ICONS_URL } from "../../constants";
import {
  useAuth,
  useAuthModal,
  useCart,
  useFilter,
  useWishlist,
} from "../../context";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { authState } = useAuth();
  const { filterState, filterDispatch } = useFilter();
  const { authModalState, authModalHandler } = useAuthModal();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={(styles.headerItem, styles.headerLogo)}>
        <img
          className={styles.logo}
          src={`${ASSETS_URL}/logo.svg`}
          alt="logo"
        />
        <Link to="/" className={`h-4 ${styles.brandname}`}>
          <span className={styles.primaryFont}>VIS</span>KART
        </Link>
      </div>
      <div className={(styles.headerItem, styles.headerButtonWrapper)}>
        <Link
          to="/products"
          className={`button btn-solid-primary ${styles.navbarBtn}`}
        >
          Featured
        </Link>
        <Link
          to="/products"
          className={`button btn-plain btn-primary ${styles.navbarBtn}`}
        >
          Top
        </Link>
      </div>
      {location.pathname === "/products" ? (
        <div className={(styles.headerItem, styles.headerItemSearch)}>
          <div className="input input__icons">
            <input
              className={`input__field--text search ${styles.searchInput}`}
              type="text"
              placeholder="Search..."
              value={filterState.search}
              onChange={(e) =>
                filterDispatch({
                  type: "SEARCH",
                  payload: {
                    search: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>
      ) : null}
      <div className={(styles.headerItem, styles.headerMenuWrapper)}>
        {authState.user ? (
          <Link
            to="/cart"
            className={`txt-center badge__container ${styles.headerMenuItem}`}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/shopping-cart.svg`}
              alt="cart"
            />
            <p className={styles.optionText}>My Cart</p>
            {cartState.cart.length > 0 ? (
              <span className={`badge bdg-danger ${styles.badge}`}>
                {cartState.cart.length < 10 ? cartState.cart.length : "9+"}
              </span>
            ) : null}
          </Link>
        ) : (
          <button
            className={`txt-center ${styles.headerMenuItem}`}
            onClick={() => {
              toast.warning("You're not logged-in");
              return authModalHandler("LOGIN");
            }}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/shopping-cart.svg`}
              alt="cart"
            />
            <p className={styles.optionText}>My Cart</p>
          </button>
        )}
        {authState.user ? (
          <Link
            to="/wishlist"
            className={`txt-center badge__container ${styles.headerMenuItem}`}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/heart.svg`}
              alt="heart"
            />
            <p className={styles.optionText}>Wishlist</p>
            {wishlistState.wishlist.length > 0 ? (
              <span className={`badge bdg-danger ${styles.badge}`}>
                {wishlistState.wishlist.length < 10
                  ? wishlistState.wishlist.length
                  : "9+"}
              </span>
            ) : null}
          </Link>
        ) : (
          <button
            className={`txt-center ${styles.headerMenuItem}`}
            onClick={() => {
              toast.warning("You're not logged-in");
              return authModalHandler("LOGIN");
            }}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/heart.svg`}
              alt="heart"
            />
            <p className={styles.optionText}>Wishlist</p>
          </button>
        )}

        <button className={`button btn-plain-icon ${styles.themeSwitcher}`}>
          <img
            className="icon-dark"
            src={`${ICONS_URL}/moon.svg`}
            alt="moon"
            id="theme-icon"
          />
        </button>
        {authState.user ? (
          <Link to="/user" className={styles.profileBadge}>
            <img
              className="icon-md icon-light"
              src={`${ICONS_URL}/user.svg`}
              alt="login"
            />
            <p className={styles.userName}>{authState.user.username}</p>
          </Link>
        ) : (
          <button
            className={`txt-center ${styles.headerMenuItem} ${styles.profileIcon}`}
            onClick={() => authModalHandler("OPEN")}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/user.svg`}
              alt="login"
            />
          </button>
        )}
      </div>
      {(authModalState.login || authModalState.signup) && <AuthModal />}
    </header>
  );
};

export { Navbar };
