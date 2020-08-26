import React from "react";

import styles from "./DividendList.module.css";

import Trends from "./Trends/Trends";

import { getCurrentYear } from "../../helpers";

const DividendList = ({ dividends, ticker, ranking }) => {
  const renderDividendListItems = () => {
    return Object.keys(dividends)
      .reverse()
      .map((key) => {
        return (
          <li className={styles.listItem} key={`${ticker}-${key}`}>
            <p>{key}</p>
            <p>{dividends[key]} NOK</p>
          </li>
        );
      });
  };

  return (
    <section className={styles.dividendListContainer}>
      <h3 className={styles.header}>Dividend per share</h3>
      <div className={styles.border} />

      <ul className={styles.dividendList}>{renderDividendListItems()}</ul>

      <div className={styles.border} />
      <Trends dividends={dividends} />

      <div className={styles.rankingContainer}>
        <p>
          Stock number {ranking} in dividends per share in {getCurrentYear()}
        </p>
        <div className={styles.ranking}>{ranking}</div>
      </div>
    </section>
  );
};

export default DividendList;
