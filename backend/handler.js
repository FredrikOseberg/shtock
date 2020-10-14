"use strict";

const { scanTable, getStockDataFromExchange } = require("./src/scanTable");

module.exports.getStocks = async (event) => {
  const items = await scanTable(process.env.DYNAMO_TABLE);
  const stockData = await getStockDataFromExchange()

  const formattedData = formatData(items, stockData)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': "*"
    },
    body: JSON.stringify(formattedData)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};



const formatData = (result, data) => {
  return result.map(stock => {
    console.log("STOCK ITEM: ", stock)
    console.log("DATA ROW ITEM 1: ", data.rows[0])
    const item = data.rows.find(element => element.values.ITEM === stock.ticker)

    const newDividends = {}
    stock.dividends.forEach(item => {
      newDividends[item.year] = item.amount
    })

    stock.dividends = newDividends;

    if (!item) {
      return {
        ticker: stock.ticker,
        name: stock.ticker,
        dividends: stock.dividends,
        investorpage: stock.dn_link,
        bid: 1,
        ask: 1,
        sector: "Unknown",
        change: 0.2,
        homepage: "https://google.com",
        pe: 15,
        research: []
      }
    }
    const { values } = item;

    return {
      ticker: stock.ticker,
      name: values.LONG_NAME,
      dividends: stock.dividends,
      investorpage: stock.dn_link,
      bid: values.BID,
      ask: values.ASK,
      sector: values.GICS_CODE_LEVEL_1,
      change: values.CHANGE_PCT_SLACK,
      homepage: "https://google.com",
      pe: 15,
      research: []
    }
  })
}

