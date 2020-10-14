import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import data from "./data";

import Dashboard from "./pages/Dashboard/Dashboard";
import StockView from "./pages/StockView/StockView";

function App() {
  const [exchanges, setExchanges] = useState([]);
  const [stocks, setStocks] = useState([]);

  const getExchanges = () => {
    const exchanges = data.exchanges;

    return {
      exchanges,
    };
  };

  useEffect(() => {
    const { exchanges } = getExchanges();

    const getData = async () => {
      const response = await fetch("https://zfkkbotsag.execute-api.eu-central-1.amazonaws.com/dev/stocks")
      const data = await response.json()
      setStocks(data)
    }
    getData()

    setExchanges(exchanges);
  }, []);

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <Dashboard
              exchanges={exchanges}
              stocks={stocks}
              setStocks={setStocks}
              {...props}
            />
          )}
        />
        <Route
          path="/stocks/:ticker"
          render={(props) => <StockView {...props} stocks={stocks} />}
        />
      </Router>
    </div>
  );
}

export default App;
