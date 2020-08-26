import React from "react";
import classnames from "classnames";

import { growingDividends, consistentDividends } from "../../../helpers";

import { ReactComponent as ChartIcon } from "../../../assets/icons/chart-line.svg";
import { ReactComponent as ChartDownIcon } from "../../../assets/icons/chart-line-down.svg";
import { ReactComponent as PiggyBankIcon } from "../../../assets/icons/piggy-bank.svg";

import styles from "../DividendList.module.css";

const Trends = ({ dividends }) => {
  const getGrowingTrend = () => {
    const isGrowing = growingDividends(dividends);

    if (isGrowing) {
      return (
        <>
          <div className={styles.iconContainer}>
            <ChartIcon className={styles.icon} />
          </div>
          <p>Growing</p>
        </>
      );
    }
    return (
      <>
        <div className={styles.iconContainer}>
          <ChartDownIcon className={styles.icon} />
        </div>
        <p>Declining</p>
      </>
    );
  };

  const getConsistentTrend = () => {
    const [isConsistent] = consistentDividends(dividends);

    if (isConsistent) {
      return (
        <>
          <div className={styles.iconContainer}>
            <PiggyBankIcon className={styles.icon} />
          </div>
          <p>Consistent</p>
        </>
      );
    }
    return (
      <>
        <div className={styles.iconContainer}>
          <PiggyBankIcon className={classnames(styles.icon, styles.inverted)} />
        </div>
        <p>Inconsistent</p>
      </>
    );
  };

  return (
    <>
      <h3 className={styles.header}>Trends</h3>
      <div className={styles.container}>
        <div className={styles.trendContainer}>{getGrowingTrend()}</div>
        <div className={styles.trendContainer}>{getConsistentTrend()}</div>
      </div>
    </>
  );
};

export default Trends;
