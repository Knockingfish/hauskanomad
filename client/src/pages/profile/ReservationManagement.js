import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './ReservationManagement.module.css';

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([
    { 
      id: 1, 
      location: 'Hotel A', 
      checkInDate: '2024-02-15', 
      checkOutDate: '2024-02-20', 
      guests: 2, 
      rooms: 1 
    },
    { 
      id: 2, 
      location: 'Resort B', 
      checkInDate: '2024-03-10', 
      checkOutDate: '2024-03-15', 
      guests: 3, 
      rooms: 2 
    },
  ]);

  const [buttonVisibility, setButtonVisibility] = useState({});

  const handleCancelReservation = (reservationId) => {
    const updatedReservations = reservations.filter((reservation) => reservation.id !== reservationId);
    setReservations(updatedReservations);
    console.log(`Reservation with ID ${reservationId} canceled.`);
  };

  const handleModifyReservation = (reservationId, fieldName, newValue) => {
    const updatedReservations = reservations.map(reservation => {
      if (reservation.id === reservationId) {
        return { ...reservation, [fieldName]: newValue };
      }
      return reservation;
    });
    setReservations(updatedReservations);
  };

  const toggleButtonVisibility = (reservationId) => {
    setButtonVisibility((prevVisibility) => ({
      ...prevVisibility,
      [reservationId]: !prevVisibility[reservationId]
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.float}>
        <div className={styles.column}>
          <h2>Reservation Management</h2>
        </div>

        <div className={styles.column}>
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div className={styles.box} key={reservation.id}>
                <p>Reservation ID: {reservation.id}</p>
                <p>Location: {reservation.location}</p>
                <p>Check-in Date: {reservation.checkInDate}</p>
                <p>Check-out Date: {reservation.checkOutDate}</p>
                <p>Guests: {reservation.guests}</p>
                <p>Rooms: {reservation.rooms}</p>
                <button className={styles.click} onClick={() => toggleButtonVisibility(reservation.id)}>MODIFY RESERVATION</button>
                {buttonVisibility[reservation.id] && (
                  <div className={styles.modal}>
                    <input 
                      className={styles.modal_input}
                      type="text"
                      placeholder="Change location..."
                      value={reservation.location}
                      onChange={(e) => handleModifyReservation(reservation.id, 'location', e.target.value)}
                    />
                    <DatePicker 
                      className={styles.modal_input}
                      placeholderText="Change check-in date..."
                      selected={new Date(reservation.checkInDate)}
                      onChange={(date) => handleModifyReservation(reservation.id, 'checkInDate', date.toISOString().split('T')[0])}
                    />
                    <DatePicker 
                      className={styles.modal_input}
                      placeholderText="Change check-out date..."
                      selected={new Date(reservation.checkOutDate)}
                      onChange={(date) => handleModifyReservation(reservation.id, 'checkOutDate', date.toISOString().split('T')[0])}
                    />
                    <div className={styles.modal_slider}>
                      <input
                        type="range"
                        value={reservation.guests}
                        min="1"
                        max="10"
                        onChange={(e) => handleModifyReservation(reservation.id, 'guests', e.target.value)}
                      />
                      <span className={styles.range_item}>Guests: {reservation.guests}</span>
                    </div>
                    <div className={styles.modal_slider}>
                      <input
                        type="range"
                        value={reservation.rooms}
                        min="1"
                        max="5"
                        onChange={(e) => handleModifyReservation(reservation.id, 'rooms', e.target.value)}
                      />
                      <span className={styles.range_item}>Rooms: {reservation.rooms}</span>
                    </div>
                    <button className={styles.modal_click} onClick={() => handleCancelReservation(reservation.id)}>CANCEL RESERVATION</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No reservations found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationManagement;
