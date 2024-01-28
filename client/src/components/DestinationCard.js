// W
import React from 'react';

const DestinationCard = ({ destination }) => { // Function takes a property object as an argument
  const { name, image, info } = destination; // Format for property object

  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <div className="destination-info">
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
