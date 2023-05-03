import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <span className={styles.headerLogo}>eShop</span>

        <div className={styles.headerContentContainer}></div>
      </div>
    </header>
  );
};

export default Header;
