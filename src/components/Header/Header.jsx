import React from "react";

import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <span>Shtock</span>
        </div>

        <div className={styles.userContainer}>
          <div className={styles.user}>J</div>
          <span>Jake</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
