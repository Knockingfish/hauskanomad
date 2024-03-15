import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './BookingForm.module.css';

const BookingForm = ({ destination }) => { // Pass destination as props
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null,
      guests: parseInt(guests),
      rooms: parseInt(rooms),
      destination // Include destination in form data
    };

    try {
      const response = await fetch('https://hauskabackend/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Successfully booked!');
      } else {
        console.log(response);
        alert('Error ' + response.status, response.statusText);
      }
    } catch (error) {
      alert('Error submitting form data!', error.message);
    }
  };

  return (
    <form className={styles.outer_container} onSubmit={handleSubmit}>
      <div className={styles.form_container}>
        <div className={styles.header}>Book now for {destination}!</div> {/* Display destination */}
        <div className={styles.input_container}>
          <DatePicker
            className={styles.input}
            calendarClassName={styles.calendar}
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="Select start date..."
          />
          <DatePicker
            className={styles.input}
            calendarClassName={styles.calendar}
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
