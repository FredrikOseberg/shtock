import React from "react";

import DividendList from "../../../components/DividendList/DividendList";
import DividendCalculator from "../../../components/DividendCalculator/DividendCalculator";
import AggregatedDividend from "../../../components/AggregatedDividend/AggregatedDividend";

import { getCurrentYear } from "../../../helpers";

import styles from "./Dividend.module.css";

const Dividend = ({ stock, ranking, stocks }) => {
  const currentYear = getCurrentYear();
  const currentYearDividend = stock.dividends[currentYear];

  return (
    <div className={styles.dividend}>
      <DividendList
        dividends={stock.dividends}
        ticker={stock.ticker}
        ranking={ranking}
      />

      <div className={styles.container}>
        <DividendCalculator
          ask={stock.ask}
          currentYearDividend={currentYearDividend}
        />
        <AggregatedDividend stocks={stocks} stock={stock} />
      </div>
    </div>
  );
};

export default Dividend;
