import styles from './ReviewComments.module.css';
import React from 'react';

const ReviewComments = () => {
  return (
    <div className={styles.review_container}>
      <div className={styles.review_header}>
        <h2 className={styles.header}>Reviews and Comments</h2>
      </div>
      <div className={styles.bruv}>
        <p></p>
          <div className="rating-container">
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div className="rating-bar"></div>
          </div>
        <p>Username: </p>
      </div>
    </div>
  );
};

export default ReviewComments;
