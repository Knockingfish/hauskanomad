import React from 'react';
import styles from './BookingInfo.module.css';

const BookingInfo = () => {
  return (
    <div className={styles.booking_container}>
      <div className={styles.booking_bg}>
        <div className={styles.header}>Booking Information</div>
        <div className={styles.booking_info}>
          <div className={styles.listing}>
            <p>Price: </p>
            <p>Capacity:</p>
          </div>
          <div className={styles.listing}>
            <p>Available Dates: </p>
            <p>Restrictions: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
