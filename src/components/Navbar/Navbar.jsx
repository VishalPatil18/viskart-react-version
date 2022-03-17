import { useState } from "react";
import { AuthModal } from "../../components";
import { ASSETS_URL, ICONS_URL } from "../../constants";
import { useAuth } from "../../context";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { authState } = useAuth();

  const [authModalOpen, setAuthModalOpen] = useState({
    login: false,
    signup: false,
  });
  const authModalHandler = () => {
    setAuthModalOpen({ login: true, signup: false });
  };

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
        <Link to="/cart" className={`txt-center ${styles.headerMenuItem}`}>
          <img
            className="icon-md icon-dark"
            src={`${ICONS_URL}/shopping-cart.svg`}
            alt="cart"
          />
        </Link>
        <Link to="/wishlist" className={`txt-center ${styles.headerMenuItem}`}>
          <img
            className="icon-md icon-dark"
            src={`${ICONS_URL}/heart.svg`}
            alt="heart"
          />
        </Link>
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
        {() => console.log("Auth State in Navbar: ", authState)}
        {authState.token !== null ? (
          <Link to="/user" className={styles.profileBadge}>
            <img
              className="icon-md icon-light"
              src={`${ICONS_URL}/user.svg`}
              alt="login"
            />
            {authState.user.username}
          </Link>
        ) : (
          <button
            className={`txt-center ${styles.headerMenuItem}`}
            onClick={authModalHandler}
          >
            <img
              className="icon-md icon-dark"
              src={`${ICONS_URL}/user.svg`}
              alt="login"
            />
          </button>
        )}
      </div>
      {(authModalOpen.login || authModalOpen.signup) && (
        <AuthModal
          authModalOpen={authModalOpen}
          setAuthModalOpen={setAuthModalOpen}
        />
      )}
    </header>
  );
};

export { Navbar };
