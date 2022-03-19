import { AuthModal } from "../../components";
import { ASSETS_URL, ICONS_URL } from "../../constants";
import { useAuth, useAuthModal } from "../../context";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { authState } = useAuth();
  const { authModalState, authModalHandler } = useAuthModal();

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
        <Link to="/products" className="button btn-solid-primary">
          Featured
        </Link>
        <Link to="/products" className="button btn-plain btn-primary">
          Top
        </Link>
      </div>
      <div className={(styles.headerItem, styles.headerItemSearch)}>
        <div className="input input__icons">
          <input
            className="input__field--text search"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className={(styles.headerItem, styles.headerMenuWrapper)}>
        {authState.user ? (
          <Link to="/cart" className={`txt-center ${styles.headerMenuItem}`}>
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/shopping-cart.svg`}
              alt="cart"
            />
          </Link>
        ) : (
          <button
            className={`txt-center ${styles.headerMenuItem}`}
            onClick={() => authModalHandler("LOGIN")}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/shopping-cart.svg`}
              alt="cart"
            />
          </button>
        )}
        {authState.user ? (
          <Link
            to="/wishlist"
            className={`txt-center ${styles.headerMenuItem}`}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/heart.svg`}
              alt="heart"
            />
          </Link>
        ) : (
          <button
            className={`txt-center ${styles.headerMenuItem}`}
            onClick={() => authModalHandler("LOGIN")}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/heart.svg`}
              alt="cart"
            />
          </button>
        )}
        <button className={`txt-center ${styles.headerMenuItem}`}>
          <img
            className="icon-md icon-dark"
            src={`${ICONS_URL}/bell.svg`}
            alt="notification"
          />
        </button>

        <button className={`txt-center ${styles.headerMenuItem}`}>
          <img
            className="icon-md icon-dark"
            src={`${ICONS_URL}/cog.svg`}
            alt="settings"
          />
        </button>

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
            <p>{authState.user.username}</p>
          </Link>
        ) : (
          <button
            className={`txt-center ${styles.headerMenuItem}`}
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
