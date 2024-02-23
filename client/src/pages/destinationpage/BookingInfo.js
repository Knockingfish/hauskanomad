
import React from 'react';
import styles from './BookingInfo.module.css';

const BookingInfo = () => {
  return (
    <div className={styles.booking_container}>
      <div className={styles.booking_outer}>
        
      <h2 className={styles.header}>Booking Information</h2>
        <div className={styles.booking_info}>
          <div className={styles.booking_inner}>
            <p>Price: </p>
            <p>Capacity:</p>
          </div>
          <div className={styles.booking_inner}>
            <p>Available Dates: </p>
            <p>Restrictions: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
