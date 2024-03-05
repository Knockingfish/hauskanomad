import React from 'react';
import styles from './BookingInfo.module.css';

const BookingInfo = () => {
  return (
    <div className={styles.booking_container}>
      <div className={styles.booking_bg}>
        <div className={styles.header}>Booking Information</div>
        <div className={styles.booking_info}>
          <div className={styles.listing}>
            <p>Price: €80-100 </p>
            <p>Capacity: 1-10</p>
          </div>
          <div className={styles.listing}>
            <p>Available Dates: 1AD-01/01/3000 </p>
            <p>Restrictions: No Smoking, No Pets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
