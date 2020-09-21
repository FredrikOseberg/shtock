import React from "react";

import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.layoutContent}>
    <div className={styles.layoutContentContainer}>{children}</div>
  </div>
);

export default Layout;
