// DestinationCard.js
import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <div className="destination-info">
        <h3>{destination.name}</h3>
        <p>{destination.info}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
