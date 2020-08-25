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

const calculateDividendPayoutValue = (stock) => {
  const year = getCurrentYear();
  const dividend = stock.dividends[year];

  const total = dividend * (1000 / stock.ask);
  return total;
};
