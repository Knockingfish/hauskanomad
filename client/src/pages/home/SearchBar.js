// SearchBar.js

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './SearchBar.module.css';
import { useDarkMode } from '../global/DarkModeContext';

const SearchBar = ({ searchQuery, setSearchQuery, startDate, setStartDate, endDate, setEndDate, numGuests, setNumGuests, numRooms, setNumRooms }) => {
  const { darkMode } = useDarkMode();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery(value); // Update search query
  };

  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <div className={styles.bar_section}>
          <input
            className={styles.bar_item}
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={handleInputChange}
            name="textQuery"
          />
          <DatePicker
            className={styles.bar_item}
            calendarClassName={styles.calendar}
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date..."
          />
          <DatePicker
            className={styles.bar_item}
            calendarClassName={styles.calendar}
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select end date..."
          />
          <div className={styles.slider_item}>
            <span className={styles.range_item}>Guests: {numGuests}</span>
            <input
              type="range"
              value={numGuests}
              min={1}
              max={10}
              onChange={(e) => setNumGuests(parseInt(e.target.value))}
            />
          </div>
          <div className={styles.slider_item}>
            <span className={styles.range_item}>Rooms: {numRooms}</span>
            <input
              type="range"
              value={numRooms}
              min={1}
              max={5}
              onChange={(e) => setNumRooms(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button className={styles.search_button}>
          <img
            className={styles.search_icon}
            src={darkMode ? '/search_dark.png' : '/search_light.png'}
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
