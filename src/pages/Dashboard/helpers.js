import {
  getCurrentYear,
  sortStocksByDividendYield,
  sortStocksByCompoundedYield,
  sortStocksByYieldGrowth,
  calculateTotalDividends,
  calculateGrowth,
} from "../../helpers";

export const getTopFiveDividendStocks = (stocks) => {
  const sorted = sortStocksByDividendYield(stocks);
  const year = getCurrentYear();

  if (sorted.length === 0) return [];

  return sorted.slice(0, 5).map((stock) => {
    return {
      ticker: stock.ticker,
      name: stock.name,
      amount: stock.dividends[year],
    };
  });
};

export const getInfoCardData = (descriptor, stocks) => {
  if (descriptor === "growth") {
    return calculateDividendGrowthStock(stocks);
  } else if (descriptor === "yieldcurrent") {
    return calculateDividendStockCurrentYear(stocks);
  } else if (descriptor === "yieldcompounded") {
    return calculateDividendStockCompounded(stocks);
  }
};

const calculateDividendStockCurrentYear = (stocks) => {
  const sorted = sortStocksByDividendYield(stocks);
  const year = getCurrentYear();

  if (sorted.length === 0) return {};

  return {
    ticker: sorted[0].ticker,
    amount: sorted[0].dividends[year],
  };
};

export const calculateDividendStockCompounded = (stocks) => {
  const sortedByCompoundedYield = sortStocksByCompoundedYield(stocks);

  if (sortedByCompoundedYield.length === 0) return {};

  return {
    ticker: sortedByCompoundedYield[0].ticker,
    amount: calculateTotalDividends(sortedByCompoundedYield[0]),
  };
};

const calculateDividendGrowthStock = (stocks) => {
  const sortedByGrowth = sortStocksByYieldGrowth(stocks);

  if (sortedByGrowth.length === 0) return {};

  return {
    ticker: sortedByGrowth[0].ticker,
    amount: calculateGrowth(sortedByGrowth[0]),
  };
};
