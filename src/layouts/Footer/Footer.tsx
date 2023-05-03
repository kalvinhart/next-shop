import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <span className={styles.footerLogo}>eShop</span>

        <div className={styles.footerContentContainer}></div>
      </div>
    </footer>
  );
};

export default Footer;
