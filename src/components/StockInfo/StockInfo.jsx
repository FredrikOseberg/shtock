import React from "react";

import styles from "./StockInfo.module.css";

const StockInfo = ({ stock }) => {
  return (
    <div className={styles.stockInfo}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainers}>
          <span className={styles.headerSpan}>Name</span>
          <p>{stock.name}</p>
        </div>
        <div className={styles.innerContainers}>
          <span className={styles.headerSpan}>Ticker</span>
          <p>{stock.ticker}</p>
        </div>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainers}>
          <span className={styles.headerSpan}>Bid</span>
          <p className={styles.bids}>{stock.bid}</p>
        </div>
        <div className={styles.innerContainers}>
          <span className={styles.headerSpan}>Ask</span>
          <p className={styles.bids}>{stock.ask}</p>
        </div>
      </div>

      <div className={styles.outerContainer}>
        <div className={styles.innerContainers}>
          <span className={styles.headerSpan}>Sector</span>
          <p>{stock.sector}</p>
        </div>
        <div className={styles.innerContainers}>
          <p className={styles.change}>{stock.change}%</p>
        </div>
      </div>
    </div>
  );
};

export default StockInfo;
