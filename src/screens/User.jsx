import { useEffect, useState } from "react";
import {
  Address,
  Settings,
  UserHeader,
  UserOrders,
  UserProfile,
} from "../components";
import { scrollToTop } from "../utilities";
import styles from "./User.module.css";

const User = ({ cname }) => {
  const [tab, setTab] = useState("profile");

  const tabHandler = (tabName) => {
    setTab(tabName);
  };

  useEffect(scrollToTop, []);

  return (
    <section className={cname} id="mainBody">
      <UserHeader />

      <nav className={styles.nav}>
        <button
          className={`${styles.navBtn} ${
            tab === "profile" ? styles.activeNavBtn : ""
          }`}
          onClick={() => tabHandler("profile")}
        >
          Profile
        </button>
        <button
          className={`${styles.navBtn} ${
            tab === "address" ? styles.activeNavBtn : ""
          }`}
          onClick={() => tabHandler("address")}
        >
          My Address
        </button>
        <button
          className={`${styles.navBtn} ${
            tab === "order" ? styles.activeNavBtn : ""
          }`}
          onClick={() => tabHandler("order")}
        >
          My Orders
        </button>
        <button
          className={`${styles.navBtn} ${
            tab === "settings" ? styles.activeNavBtn : ""
          }`}
          onClick={() => tabHandler("settings")}
        >
          Settings
        </button>
      </nav>

      {(() => {
        switch (tab) {
          case "profile":
            return <UserProfile />;
          case "address":
            return <Address />;
          case "order":
            return <UserOrders />;
          case "settings":
            return <Settings />;
        }
      })()}
    </section>
  );
};

export { User };
