import React, { useEffect, useState } from "react";

import Highlight from "./Highlight/Highlight";

import styles from "./Hightlights.module.css";
import {
  determineGrowingDividends,
  determineConsistentDividends,
  determineRanking,
} from "./highlightshelpers";

const Highlights = ({ stock, stocks }) => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const hightlights = getHighlights(stock);
    setHighlights(hightlights);
  }, [stock]);

  const getHighlights = (stock) => {
    let highlights = [];

    highlights = highlights.concat(determineGrowingDividends(stock.dividends));
    highlights = highlights.concat(
      determineConsistentDividends(stock.dividends)
    );
    highlights = highlights.concat(determineRanking(stock, stocks));

    return highlights;
  };

  const renderHighlights = () => {
    return highlights.map((highlight) => {
      return (
        <Highlight
          type={highlight.type}
          text={highlight.text}
          key={highlight.type}
        />
      );
    });
  };

  return (
    <div className={styles.highlights}>
      <h1 className={styles.header}>Highlights</h1>

      <div className={styles.container}>{renderHighlights()}</div>
    </div>
  );
};

export default Highlights;
