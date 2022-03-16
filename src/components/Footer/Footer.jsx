import { Link } from "react-router-dom";
import { ICONS_URL } from "../../constants";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={`txt-center ${styles.footerContent}`}>
        <article className={styles.footerLeft}>
          <a
            href="https://github.com/VishalPatil18/VISKart"
            className={`h-5 ${styles.contribute}`}
          >
            Contribute to VISKart
          </a>
          <p className="bd-5">
            We are an Open Source Project. Join us to create this beautiful
            E-Commerce Platform and serve the community of Gamers.
          </p>
          <div className={styles.footerLeftSociallinks}>
            <a className="button btn-socialmedia btn-solid-primary">
              <img
                className="icon-light icon-md button__icon"
                src={`${ICONS_URL}/twitter.svg`}
                alt="twitter"
              />
            </a>

            <a className="button btn-socialmedia btn-solid-secondary">
              <img
                className="icon-light icon-md button__icon"
                src={`${ICONS_URL}/linkedin.svg`}
                alt="linkedin"
              />
            </a>

            <a className="button btn-socialmedia btn-solid-danger">
              <img
                className="icon-light icon-md button__icon"
                src={`${ICONS_URL}/instagram.svg`}
                alt="instagram"
              />
            </a>

            <a className={`button btn-socialmedia ${styles.mediumBtn}`}>
              <img
                className="icon-light icon-md button__icon"
                src={`${ICONS_URL}/medium.svg`}
                alt="medium"
              />
            </a>
          </div>
        </article>
        <article className={styles.footerCenter}>
          <Link to="/" className={styles.footerLink}>
            Home
          </Link>
          <Link to="/products" className={styles.footerLink}>
            Products
          </Link>
          <Link to="/products" className={styles.footerLink}>
            Featured
          </Link>
          <Link to="/products" className={styles.footerLink}>
            Top
          </Link>
        </article>
        <article className={styles.footerRight}>
          <Link to="/cart" className={styles.footerLink}>
            My Cart
          </Link>
          <Link to="/wishlist" className={styles.footerLink}>
            Wishlist
          </Link>
          <Link to="/" className={styles.footerLink}>
            About
          </Link>
          <Link to="/" className={styles.footerLink}>
            Settings
          </Link>
        </article>
      </section>
      <p className={`bd-5 ${styles.footerCopyright}`}>
        Copyright &copy; 2022
        <a href="https://vishalpatil.me/"> Vishal Patil </a>. All Rights
        Reserved
      </p>
    </footer>
  );
};

export { Footer };
