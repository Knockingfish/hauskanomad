
import React from 'react';

const BookingInfo = ({ price, capacity, availableDates, restrictions }) => {
  return (
    <div>
      <h2>Booking Information</h2>
      <p>Price: {price}</p>
      <p>Capacity: {capacity.guests} guests, {capacity.rooms} rooms</p>
      <p>Available Dates: {availableDates.join(', ')}</p>
      <p>Restrictions: {restrictions.join(', ')}</p>
    </div>
  );
};

export default BookingInfo;
