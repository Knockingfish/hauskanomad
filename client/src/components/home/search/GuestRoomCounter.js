import React from 'react';
import styles from './GuestRoomCounter.module.css'

const GuestRoomCounter = ({ label, value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.bar_item}>
      <button className={styles.counter_button_left} onClick={onDecrement}>❮</button>
        <div className={styles.counter_label}>
          <label>{label}:<span>{value}</span></label>
        </div>
      <button className={styles.counter_button_right} onClick={onIncrement}>❯</button>
    </div>
  );
};

export default GuestRoomCounter;
