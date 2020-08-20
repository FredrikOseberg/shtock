import React from "react";

import styles from "./Subheader.module.css";

const Subheader = (props) => {
  return (
    <div className={styles.subheader}>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
};

export default Subheader;
