import React, { useState } from 'react';
import styles from '../SearchBar.module.css';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  // Function to toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // Function to handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  // Function to get days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // Get current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInCurrentMonth = getDaysInMonth(currentMonth + 1, currentYear);

  // Generate array of dates for current month
  const dates = Array.from({ length: daysInCurrentMonth }, (_, index) => index + 1);

  return (
    <div className="custom-datepicker">
      <input
        className={styles.date_item}
        type="text"
        placeholder={"Select a date..."}
        value={selectedDate || ''}
        readOnly // Prevent direct editing of the input
        onClick={toggleCalendar} // Show calendar when input is clicked
      />
      {showCalendar && (
        <div className={styles.calendar}>
          <div className={styles.calendar_header}>
            <button className={styles.backward} onClick={() => console.log('Previous month')}>{'🞀'}</button>
            <span>{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</span>
            <button className={styles.forward} onClick={() => console.log('Next month')}>{'🞂'}</button>
          </div>
          <div className={styles.calendar_body}>
            {dates.map((date) => (
              <div
                className={styles.day}
                key={date}
                onClick={() => handleDateClick(date)}
              >
                {date}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
