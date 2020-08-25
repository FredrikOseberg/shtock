import { getCurrentYear, sortStocksByDividendPayoutValue } from "../../helpers";

export const determineGrowingDividends = (dividends) => {
  const dividendKeys = Object.keys(dividends);
  const comparisons = [];

  const decliningGrowthHighlight = {
    type: "decliningdividends",
    text: "Declining dividend yields",
  };

  if (dividendKeys.length < 3) return [decliningGrowthHighlight];

  dividendKeys
    .reverse()
    .slice(0, 3)
    .forEach((key, index) => {
      const firstItem = dividends[key];
      const comparisonItem = dividends[dividendKeys[index + 1]];

      if (index >= 3) {
        return;
      }

      if (firstItem > comparisonItem) {
        comparisons.push(true);
      }
    });

  if (comparisons.length === 3) {
    return [{ type: "growingdividends", text: "Growing dividend yields" }];
  } else {
    return [decliningGrowthHighlight];
  }
};

export const determineConsistentDividends = (dividends) => {
  const upperYearBoundry = getCurrentYear();
  const lowerYearBoundry = upperYearBoundry - 20;
  const treshold = 15;

  const results = new Set();

  Object.keys(dividends)
    .map((item) => +item)
    .forEach((item) => {
      if (item <= upperYearBoundry && item >= lowerYearBoundry) {
        results.add(item);
      }
    });

  if (results.size >= treshold) {
    return {
      type: "consistentdividends",
      text: `Has consistently paid out dividends in ${results.size} of 20 years.`,
    };
  } else {
    return {
      type: "inconsistentdividends",
      text: `Has only paid out dividends in ${results.size} of 20 years.`,
    };
  }
};

export const determineRanking = (stock, stocks) => {
  let result = 0;
  const sorted = sortStocksByDividendPayoutValue(stocks);

  sorted.forEach((stockItem, index) => {
    if (stockItem.ticker === stock.ticker) {
      result = index + 1;
    }
  });

  return [
    {
      type: "ranking",
      text: `Ranked ${result} stock in dividend yield per
1000 NOK spent.`,
    },
  ];
};
