export const sortStocksByDividendYield = (stocks) => {
  const stocksCopy = [...stocks];
  const year = getCurrentYear();

  const sorted = stocksCopy.sort((stockA, stockB) => {
    return stockB.dividends[year] - stockA.dividends[year];
  });

  return sorted;
};

export const sortStocksByCompoundedYield = (stocks) => {
  return sortStocks(stocks, calculateTotalDividends);
};

export const sortStocksByYieldGrowth = (stocks) => {
  return sortStocks(stocks, calculateGrowth);
};

export const sortStocksByDividendPayoutValue = (stocks) => {
  return sortStocks(stocks, calculateDividendPayoutValue);
};

export const sortStocksByAggregatedDividend = (stocks, callback) => {
  return sortStocks(stocks, callback);
};

const sortStocks = (stocks, sortingValueFunc) => {
  const stocksCopy = [...stocks];

  const sortedByValue = stocksCopy.sort((stockA, stockB) => {
    const stockASortingValue = sortingValueFunc(stockA);
    const stockBSortingValue = sortingValueFunc(stockB);

    if (stockBSortingValue > stockASortingValue) {
      return 1;
    } else if (stockBSortingValue < stockASortingValue) {
      return -1;
    }

    return 0;
  });

  return sortedByValue;
};

export const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
};

export const calculateTotalDividends = (stock) => {
  let total = 0;
  Object.keys(stock.dividends).forEach((key) => {
    total += stock.dividends[key];
  });

  return total;
};

export const calculateGrowth = (stock) => {
  const year = getCurrentYear();
  const comparisonYear = year - 3;

  const total = stock.dividends[year] - stock.dividends[comparisonYear];
  return total;
};

export const growingDividends = (dividends) => {
  const dividendKeys = Object.keys(dividends);
  const comparisons = [];

  if (dividendKeys.length < 3) return false;

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
    return true;
  }
  return false;
};

export const consistentDividends = (dividends) => {
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
    return [true, results];
  }
  return [false, results];
};

const calculateDividendPayoutValue = (stock) => {
  const year = getCurrentYear();
  const dividend = stock.dividends[year];

  const total = dividend * (1000 / stock.ask);
  return total;
};
