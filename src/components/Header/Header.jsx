import React from "react";

import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <span>Shtock</span>
        </Link>

        <div className={styles.userContainer}>
          <div className={styles.user}>J</div>
          <span>Jake</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
