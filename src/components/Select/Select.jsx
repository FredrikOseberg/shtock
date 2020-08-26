import React from "react";
import classname from "classnames";

import { ReactComponent as ArrowDownIcon } from "../../assets/icons/chevron-down.svg";

import styles from "./Select.module.css";

const Select = ({ onChange, options, className }) => {
  const renderOptions = () => {
    return options.map((option) => {
      return (
        <option value={option.value} key={option.value}>
          {option.displayValue}
        </option>
      );
    });
  };

  return (
    <div className={classname(styles.selectContainer, className)}>
      <select className={styles.select} onChange={onChange}>
        {renderOptions()}
      </select>
      <ArrowDownIcon className={styles.icon} />
    </div>
  );
};

export default Select;
