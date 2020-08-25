import React from "react";

import styles from "./TopFiveDividendStocksList.module.css";

const TopFiveDividendStocksList = (props) => {
  const renderListItems = () => {
    return props.stocks.map((stock) => {
      return (
        <li className={styles.listItem} key={stock.ticker}>
          <div>{stock.ticker}</div>
          <div>{stock.amount} NOK</div>
        </li>
      );
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Top five dividend yield stocks</h1>
      <ul className={styles.dividendList}>{renderListItems()}</ul>
    </div>
  );
};

export default TopFiveDividendStocksList;
