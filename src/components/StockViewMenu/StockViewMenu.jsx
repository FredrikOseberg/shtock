import React from "react";
import classnames from "classnames";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

import { ReactComponent as CoinsIcon } from "../../assets/icons/coins.svg";
import { ReactComponent as FlaskIcon } from "../../assets/icons/flask.svg";

import styles from "./StockViewMenu.module.css";

const StockViewMenu = () => {
  const match = useRouteMatch();
  const location = useLocation();

  const urlElements = location.pathname.split("/");
  const lastElement = urlElements[urlElements.length - 1];

  const onResearchPage = lastElement === "research";

  const classes = classnames(styles.border, {
    [styles.borderResearch]: onResearchPage,
  });

  return (
    <div className={styles.stockViewMenu}>
      <div className={classes}></div>
      <div className={styles.container}>
        <CoinsIcon className={styles.icon} />
        <Link to={match.url} className={styles.link}>
          Dividends
        </Link>
      </div>
      <div className={styles.container}>
        <FlaskIcon className={styles.icon} />
        <Link to={`${match.url}/research`} className={styles.link}>
          Research
        </Link>
      </div>
    </div>
  );
};

export default StockViewMenu;
