import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ConditionallyRender } from "react-util-kit";

import Header from "../../components/Header/Header";
import Subheader from "../../components/Subheader/Subheader";
import StockInfo from "../../components/StockInfo/StockInfo";
import Highlights from "../../components/Highlights/Highlights";

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
  const { ticker } = useParams();
  const [stock, setStock] = useState(initialObject);

  useEffect(() => {
    const getData = () => {
      const stock = stocks.find((stock) => stock.ticker === ticker);
      setStock(stock);
    };

    getData();
  }, [stocks, ticker]);

  return (
    <>
      <Header />
      <Subheader>
        <ConditionallyRender
          ifTrue={stock}
          show={<StockInfo stock={stock} />}
        />
        <ConditionallyRender
          ifTrue={stock}
          show={<Highlights stock={stock} stocks={stocks} />}
        />
      </Subheader>
    </>
  );
};

export default StockView;
