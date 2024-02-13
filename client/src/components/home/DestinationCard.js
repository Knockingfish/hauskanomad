import React from 'react';
import styles from './DestinationCard.module.css';

const DestinationCard = ({ destination }) => {
  return (
    <div className={styles.destination_card}>
      <img src={destination.url} alt={destination.name} /> {/* Wrap in a Link tag later, and extend the Schema to use it. */}
      <div className={styles.destination_info}>
        <h3>{destination.name}</h3>
        <p>{destination.info}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
