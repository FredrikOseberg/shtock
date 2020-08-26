import React, { useState } from "react";

import styles from "./DividendCalculator.module.css";

const DividendCalculator = ({ ask, currentYearDividend }) => {
  const [amount, setAmount] = useState(0);

  const getAmountOfShares = () => {
    if (amount > 0) {
      const shares = amount / ask;
      return shares.toFixed(2);
    }
    return 0;
  };

  const calculateProjectedDividend = () => {
    const shares = getAmountOfShares();
    const total = shares * currentYearDividend;

    return total.toFixed(2);
  };

  return (
    <section className={styles.calculator}>
      <h3 className={styles.header}>Dividend Calculator</h3>

      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <p className={styles.descriptor}>Amount in NOK</p>
          <input
            value={amount}
            name="amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.descriptor}>Current ask</p>
          <p className={styles.ask}>{ask} NOK</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <p className={styles.descriptor}>Amount of shares</p>
          <p className={styles.shares}>{getAmountOfShares()}</p>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.descriptor}>Projected dividend</p>
          <p className={styles.projectedDividend}>
            {calculateProjectedDividend()} NOK
          </p>
        </div>
      </div>
    </section>
  );
};

export default DividendCalculator;
