import React from "react";

import { ReactComponent as GlobeIcon } from "../../assets/icons/globe.svg";

import styles from "./ResearchCard.module.css";

const ResearchCard = ({ title, description, link, author }) => (
  <div className={styles.container}>
    <h1 className={styles.header}>{title}</h1>
    <p>{description}</p>
    <span className={styles.spacer} />
    <div className={styles.source}>
      <a href={link} target="__blank" className={styles.sourceLink}>
        <GlobeIcon className={styles.icon} />
        Source
      </a>
      <div className={styles.author}>
        <div className={styles.authorAvatar}>J</div>
        <p>{author.name}</p>
      </div>
    </div>
  </div>
);

export default ResearchCard;
