import React, { useEffect, useState } from "react";

import { useParams, Route, useRouteMatch } from "react-router-dom";
import { ConditionallyRender } from "react-util-kit";

import Header from "../../components/Header/Header";
import Subheader from "../../components/Subheader/Subheader";
import StockInfo from "../../components/StockInfo/StockInfo";
import Highlights from "../../components/Highlights/Highlights";
import Resources from "../../components/Resources/Resources";
import StockViewMenu from "../../components/StockViewMenu/StockViewMenu";
import Dividend from "./Dividend/Dividend";

import { sortStocksByDividendYield } from "../../helpers";

import styles from "./StockView.module.css";

const initialObject = {
  name: "",
  ticker: "",
  bid: 0,
  ask: 0,
  sector: "",
  change: 0,
  dividends: {},
  homepage: "",
  investorpage: "",
  pe: 0,
};

const StockView = ({ stocks }) => {
  const match = useRouteMatch();
  const { ticker } = useParams();
  const [stock, setStock] = useState(initialObject);

  useEffect(() => {
    const getData = () => {
      if (stocks.length === 0) return;
      const stock = stocks.find((stock) => stock.ticker === ticker);
      setStock(stock);
    };

    getData();
  }, [stocks, ticker]);

  const getCurrentYearDividendYieldRating = (stocks) => {
    const sorted = sortStocksByDividendYield(stocks);
    let ranking;

    sorted.forEach((stockItem, index) => {
      if (stockItem.ticker === stock.ticker) {
        ranking = index + 1;
      }
    });

    return ranking;
  };

  return (
    <>
      <Header />
      <Subheader>
        <ConditionallyRender
          ifTrue={stock}
          show={
            <>
              <StockInfo stock={stock} />
              <Highlights stock={stock} stocks={stocks} />
              <Resources
                homepage={stock.homepage}
                investorpage={stock.investorpage}
              />
              <StockViewMenu />
            </>
          }
        />
      </Subheader>
      <div className={styles.content}>
        <div className={styles.container}>
          <Route
            exact
            path={match.url}
            render={() => (
              <Dividend
                stock={stock}
                ranking={getCurrentYearDividendYieldRating(stocks)}
                stocks={stocks}
              />
            )}
          />
          <Route path={`${match.url}/research`} component={Research} />
        </div>
      </div>
    </>
  );
};

const Research = () => {
  return <div>Research</div>;
};

export default StockView;
