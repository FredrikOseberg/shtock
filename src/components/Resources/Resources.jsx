import React from "react";

import styles from "./Resources.module.css";

import { ReactComponent as GlobeIcon } from "../../assets/icons/globe.svg";

const Resources = ({ homepage, investorpage }) => {
  return (
    <div className={styles.resource}>
      <h2 className={styles.header}>Resources</h2>
      <div className={styles.container}>
        <GlobeIcon className={styles.icon} />
        <a
          href={homepage}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </a>
      </div>
      <div className={styles.container}>
        <GlobeIcon className={styles.icon} />
        <a
          href={investorpage}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          DN Investor
        </a>
      </div>
    </div>
  );
};

export default Resources;
