import React, { useState } from "react";

import Select from "../Select/Select";

import { getCurrentYear, sortStocksByAggregatedDividend } from "../../helpers";

import styles from "./AggregatedDividend.module.css";

const AggregatedDividend = ({ stocks, stock }) => {
  const [years, setYears] = useState(20);
  const options = [
    { value: 20, displayValue: "20 years" },
    { value: 15, displayValue: "15 years" },
    {
      value: 10,
      displayValue: "10 years",
    },
    {
      value: 5,
      displayValue: "5 years",
    },
  ];

  const onChange = (e) => {
    const years = e.target.value;
    setYears(years);
  };

  const getValidKeys = () => {
    const upperTreshold = getCurrentYear();
    const lowerTreshold = upperTreshold - years;

    const keysWithinTresholdBoundries = Object.keys(stock.dividends).filter(
      (key) => {
        const convertedToNumber = +key;

        if (
          convertedToNumber <= upperTreshold &&
          convertedToNumber >= lowerTreshold
        ) {
          return true;
        }
        return false;
      }
    );
    return keysWithinTresholdBoundries;
  };

  const calculateTotalDividends = (keys, dividends) => {
    let total = 0;

    keys.forEach((key) => {
      if (dividends[key]) {
        total += dividends[key];
      }
    });
    return total;
  };

  const getAverage = (dividends) => {
    const validKeys = getValidKeys(dividends);
    const aggregatedDividends = calculateTotalDividends(validKeys, dividends);
    return (aggregatedDividends / validKeys.length).toFixed(2);
  };

  const getTotalDividendPerStock = (stock) => {
    const validKeys = getValidKeys(stock.dividends);
    const total = calculateTotalDividends(validKeys, stock.dividends);
    return total;
  };

  const getAggregateRanking = (stocks, ticker) => {
    let ranking;
    const sorted = sortStocksByAggregatedDividend(
      stocks,
      getTotalDividendPerStock
    );

    sorted.forEach((stockItem, index) => {
      if (stockItem.ticker === ticker) {
        ranking = index + 1;
      }
    });

    return ranking;
  };

  const ranking = getAggregateRanking(stocks, stock.ticker);

  return (
    <section className={styles.aggregatedDividend}>
      <div className={styles.header}>
        <h3 className={styles.heading}>Aggregated Dividend</h3>
        <Select
          options={options}
          className={styles.select}
          onChange={onChange}
        />
      </div>

      <div className={styles.container}>
        <p>Average past {years} years</p>
        <p>{getAverage(stock.dividends)} NOK</p>
      </div>

      <div className={styles.container}>
        <p>Total yield</p>
        <p>{getTotalDividendPerStock(stock)} NOK</p>
      </div>

      <div className={styles.border} />

      <div className={styles.rankingContainer}>
        <p>
          Stock number {ranking} in dividends per share in aggregate ({years}{" "}
          years).
        </p>
        <div className={styles.ranking}>{ranking}</div>
      </div>
    </section>
  );
};

export default AggregatedDividend;
