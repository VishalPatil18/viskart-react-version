import React from "react";
import { Link } from "react-router-dom";
import { ICONS_URL } from "../../constants";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ links }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumbList}>
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <li className={styles.breadcrumbItem}>
              <Link
                to={item.path}
                className={
                  i === links.length - 1 ? styles.active : styles.breadcrumbLink
                }
              >
                {item.name}
              </Link>
            </li>
            {i < links.length - 1 && (
              <li className={styles.breadcrumbItem}>
                <img
                  className={`icon-md icon-grey ${styles.breadcrumbIcon}`}
                  src={`${ICONS_URL}/angle-up.svg`}
                  alt="arrow"
                />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export { Breadcrumb };
