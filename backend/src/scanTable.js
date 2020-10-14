const AWS = require("aws-sdk");
const fetch = require("node-fetch")

module.exports.scanTable = async (tableName) => {
  const client = new AWS.DynamoDB.DocumentClient();

  const parameters = {
    TableName: tableName,
  };

  const result = await client.scan(parameters).promise();



  return result.Items;
};

module.exports.getStockDataFromExchange = async () => {
  const endpointUrl = `https://www.oslobors.no/ob/servlets/components?type=table&generators%5B0%5D%5Bsource%5D=feed.ose.quotes.EQUITIES%2BPCC&filter=&view=DELAYED&columns=PERIOD%2C+INSTRUMENT_TYPE%2C+TRADE_TIME%2C+ITEM_SECTOR%2C+ITEM%2C+LONG_NAME%2C+BID%2C+ASK%2C+LASTNZ_DIV%2C+CLOSE_LAST_TRADED%2C+CHANGE_PCT_SLACK%2C+TURNOVER_TOTAL%2C+TRADES_COUNT_TOTAL%2C+MARKET_CAP%2C+HAS_LIQUIDITY_PROVIDER%2C+PERIOD%2C+MIC%2C+GICS_CODE_LEVEL_1%2C+TIME%2C+VOLUME_TOTAL&channel=3900cb856640fe3e69a6c0a49d07765c`

  const response = await fetch(endpointUrl)
  const data = await response.json()

  return data;
}