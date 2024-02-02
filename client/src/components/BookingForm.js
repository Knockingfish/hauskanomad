import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ selectedDate, guests, rooms });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Date:
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </label>
      <label>
        Number of Guests:
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
      </label>
      <label>
        Required Rooms:
        <input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
