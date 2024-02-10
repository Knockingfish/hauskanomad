import React from 'react';

const GuestRoomCounter = ({ label, value, onIncrement, onDecrement }) => {
  return (
    <div className="guest-room-counter">
      <label>{label}:</label>
      <div className="counter-controls">
        <button onClick={onDecrement}>-</button>
        <span>{value}</span>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default GuestRoomCounter;
