import {
  getCurrentYear,
  sortStocksByDividendPayoutValue,
  growingDividends,
  consistentDividends,
} from "../../helpers";

export const determineGrowingDividends = (dividends) => {
  const isGrowing = growingDividends(dividends);

  if (isGrowing) {
    return [{ type: "growingdividends", text: "Growing dividend yields" }];
  }
  return [
    {
      type: "decliningdividends",
      text: "Declining dividend yields",
    },
  ];
};

export const determineConsistentDividends = (dividends) => {
  const [isConsistent, results] = consistentDividends(dividends);

  if (isConsistent) {
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
