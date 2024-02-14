import React from 'react';
import styles from '../SearchBar.module.css';

const CustomNumberInput = ({ value, onChange, label }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  return (
    <div className={styles.number_item}>
      <button className={styles.minus} onClick={handleDecrement}>-</button>
      <div className={styles.number_label}>
        <label>{label}</label>
        <span>{value}</span>
      </div>
      <button className={styles.plus} onClick={handleIncrement}>+</button>
    </div>
  );
};

export default CustomNumberInput;
