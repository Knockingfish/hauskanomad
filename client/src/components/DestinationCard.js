import React from 'react';

const DestinationCard = ({ destination }) => {
  // Assuming 'destination' is an object with properties like 'name', 'image', and 'info'
  const { name, image, info } = destination;

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
