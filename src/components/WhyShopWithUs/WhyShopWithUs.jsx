import { ICONS_URL } from "../../constants";
import styles from "./WhyShopWithUs.module.css";

const WhyShopWithUs = () => {
  return (
    <section className={styles.section}>
      <h5 className={styles.title}>Why Shop With Us?</h5>
      <div className={styles.cardsWrapper}>
        <article className={styles.card}>
          <img
            className="icon-xl icon-primary"
            src={`${ICONS_URL}/star-solid.svg`}
          />
          <h5 className={styles.cardTitle}>Quality and Saving</h5>
          <p className={styles.cardCaption}>
            Comprehensive quality control and affordable prices
          </p>
        </article>
        <article className={styles.card}>
          <img
            className="icon-xl icon-primary"
            src={`${ICONS_URL}/shipping-fast.svg`}
          />
          <h5 className={styles.cardTitle}>Fast Shipping</h5>
          <p className={styles.cardCaption}>
            Fast and Convenient door to door delivery
          </p>
        </article>
        <article className={styles.card}>
          <img className="icon-xl icon-primary" src={`${ICONS_URL}/lock.svg`} />
          <h5 className={styles.cardTitle}>Payment Security</h5>
          <p className={styles.cardCaption}>
            We ensure secure payment with Razorpay
          </p>
        </article>
        <article className={styles.card}>
          <img className="icon-xl icon-primary" src={`${ICONS_URL}/bell.svg`} />
          <h5 className={styles.cardTitle}>Have Questions?</h5>
          <p className={styles.cardCaption}>
            24/7 Customer Service - We're here and happy to help!
          </p>
        </article>
      </div>
    </section>
  );
};

export { WhyShopWithUs };
