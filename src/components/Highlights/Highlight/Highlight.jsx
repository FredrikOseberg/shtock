import React from "react";
import classnames from "classnames";

import { ReactComponent as ChartIcon } from "../../../assets/icons/chart-line.svg";
import { ReactComponent as PiggyBankIcon } from "../../../assets/icons/piggy-bank.svg";
import { ReactComponent as StarIcon } from "../../../assets/icons/star.svg";
import { ReactComponent as ChartDownIcon } from "../../../assets/icons/chart-line-down.svg";

import styles from "../Hightlights.module.css";

const Highlight = ({ type, text }) => {
  const getIcon = () => {
    if (type === "growingdividends") {
      return <ChartIcon className={styles.icon} />;
    } else if (type === "consistentdividends") {
      return <PiggyBankIcon className={styles.icon} />;
    } else if (type === "ranking") {
      return <StarIcon className={styles.icon} />;
    } else if (type === "inconsistentdividends") {
      return (
        <PiggyBankIcon className={classnames(styles.icon, styles.upsideDown)} />
      );
    } else if (type === "decliningdividends") {
      return <ChartDownIcon className={styles.icon} />;
    }
  };

  return (
    <div className={styles.hightlight}>
      <div className={styles.iconContainer}>{getIcon()}</div>
      <p>{text}</p>
    </div>
  );
};

export default Highlight;
