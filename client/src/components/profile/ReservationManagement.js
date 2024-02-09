// ReservationManagement.js
import React, { useState } from 'react';

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([
    { id: 1, location: 'Hotel A', checkInDate: '2024-02-15', checkOutDate: '2024-02-20' },
    { id: 2, location: 'Resort B', checkInDate: '2024-03-10', checkOutDate: '2024-03-15' },
  ]);

  const handleCancelReservation = (reservationId) => {
    const updatedReservations = reservations.filter((reservation) => reservation.id !== reservationId);
    setReservations(updatedReservations);
    console.log(`Reservation with ID ${reservationId} canceled.`);
  };

  return (
    <div>
      <h2>Reservation Management</h2>

      {reservations.length > 0 ? (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <p>Reservation ID: {reservation.id}</p>
              <p>Location: {reservation.location}</p>
              <p>Check-in Date: {reservation.checkInDate}</p>
              <p>Check-out Date: {reservation.checkOutDate}</p>
              <button onClick={() => handleCancelReservation(reservation.id)}>Cancel Reservation</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
};

export default ReservationManagement;
