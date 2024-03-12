import styles from './BookingForm.module.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Define format for booking data
    // Used when sending a backend request
    const formData = {
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null,
      guests: parseInt(guests),
      rooms: parseInt(rooms)
    };

    try {
      // Send the form data to the server
      const response = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log(formData)

      if (response.ok) {
        // Handle successful response from the server
        alert('Successfully booked!', formData);
      } else {
        // Handle error response from the server
        alert('Error 123', response.statusText);
      }
    } catch (error) {
      // Handle network errors
      alert('Error submitting form data!', error.message);
    }
  };

  return (
    <form className={styles.outer_container} onSubmit={handleSubmit}>
      <div className={styles.form_container}>
        <div className={styles.header}>Book now!</div>
        <div className={styles.input_container}>
          <DatePicker
            className={styles.input}
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="Select start date..."
          />
          <DatePicker
            className={styles.input}
            selected={endDate}
            onChange={date => setEndDate(date)}
            placeholderText="Select end date..."
          />
          <div className={styles.slider}>
            <span className={styles.range_item}>Guests: {guests}</span>
            <input
              type="range"
              value={guests}
              min={1}
              max={10}
              onChange={e => setGuests(e.target.value)}
            />
          </div>
          <div className={styles.slider}>
            <span className={styles.range_item}>Rooms: {rooms}</span>
            <input
              type="range"
              value={rooms}
              min={1}
              max={5}
              onChange={e => setRooms(e.target.value)}
            />
          </div>
          <button className={styles.form_button} type="submit">SUBMIT</button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
