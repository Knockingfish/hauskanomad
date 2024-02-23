import styles from './BookingForm.module.css'
import React, { useState } from 'react';

const BookingForm = () => {
  

  return (
    <form className={styles.outer_container}>
      <div className={styles.form_container}>
        <div className={styles.input_container}>
          <input
            placeholder="dunno"
          />
          <input
            placeholder="wut dis"
          />
          <input
            placeholder="who dat"
          />
          <button className={styles.form_button} type="submit">BOOK NOW</button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
