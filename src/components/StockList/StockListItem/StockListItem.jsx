import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as StockListIcon } from "../../../assets/icons/chart-pie-alt.svg";
import { getCurrentYear } from "../../../helpers";

import styles from "../StockList.module.css";

const StockListItem = ({ stock }) => {
  const getDividendPerShare = (stock) => {
    const year = getCurrentYear();
    return stock.dividends[year];
  };

  const getDividendPer1000Spent = (stock) => {
    const dividendPerShare = getDividendPerShare(stock);
    const amountOfStocks = 1000 / stock.ask;

    const total = amountOfStocks * dividendPerShare;
    return total.toFixed(2);
  };

  return (
    <li className={styles.listItem} key={stock.ticker}>
      <Link className={styles.link} to={`/stocks/${stock.ticker}`}>
        <div className={styles.iconContainer}>
          <StockListIcon className={styles.icon} />
        </div>
        <div className={styles.listItemName}>{stock.name}</div>
        <div className={styles.listItemTicker}>{stock.ticker}</div>
        <div className={styles.listItemAsk}>{stock.ask}</div>
        <div className={styles.listItemBid}>{stock.bid}</div>
        <div className={styles.listItemDps}>
          {getDividendPerShare(stock)} NOK
        </div>
        <div className={styles.listItemDp1000Spent}>
          {getDividendPer1000Spent(stock)} NOK
        </div>
        <div className={styles.listItemPe}>{stock.pe}</div>
        <div className={styles.listItemSector}>{stock.sector}</div>
      </Link>
    </li>
  );
};

export default StockListItem;
