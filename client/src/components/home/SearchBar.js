import React, { useState, useEffect } from 'react';
import CustomDatePicker from './search/CustomDatePicker';
import CustomNumberInput from './search/CustomNumberInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [containerWidth, setContainerWidth] = useState(window.screen.width);
  const [textQuery, setTextQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    function updateWidth() {
      setContainerWidth(window.screen.width);
    }

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleInputChange = (e) => {
    setTextQuery(e.target.value);
    if (e.target.name === 'numGuests') {
      setNumGuests(parseInt(e.target.value));
    } else if (e.target.name === 'numRooms') {
      setNumRooms(parseInt(e.target.value));
    } else {
      const query = e.target.value;
      if (query.trim() === '') {
        setShowDropdown(false);
      } else {
        handleSearchSuggestions(query);
      }
    }
  };

  const handleSearchSuggestions = (query) => {
    // Hardcoded search suggestions for testing
    const suggestions = ['New York', 'London', 'Paris', 'Tokyo', 'Phillipines'].filter(result =>
      result.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(suggestions);
    setShowDropdown(true);
  };

  const handleSearch = () => {
    // Collect all search parameters
    const searchData = {
      query: textQuery,
      startDate: startDate,
      endDate: endDate,
      numGuests: numGuests,
      numRooms: numRooms
    };
  
    // You can then process searchData as needed for search submission
    console.log('Search submitted with data:', searchData);
  };

  const handleResultClick = (result) => {
    setTextQuery(result);
    setShowDropdown(false);
  };

  return (
      <div className={styles.search_container} style={{ width: containerWidth }}>
        <div className={styles.search_bar}>
          <div className={styles.bar_section}>
            <input
              className={styles.bar_item}
              type="text"
              placeholder="Search for a destination..."
              value={textQuery}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.bar_section}>
            <CustomDatePicker
              className={styles.date_item}
              calendarClassName={styles.calendar}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select end date"
            />
            <DatePicker
              className={styles.date_item}
              calendarClassName={styles.customCalendar}
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select end date"
            />
          </div>
          <CustomNumberInput
            value={numGuests}
            label="Guests: "
            onChange={setNumGuests}
          />
          <CustomNumberInput
            value={numRooms}
            label="Rooms: "
            onChange={setNumRooms}
          />
          <button className={styles.search_button} onClick={handleSearch}>SEARCH</button>
        </div>
        {showDropdown && (
          <div className={styles.dropdown}>
            {searchResults.map((result, index) => (
              <div className={styles.dropdown_item} key={index} onClick={() => handleResultClick(result)}>{result}</div>
            ))}
          </div>
        )}
      </div>
  );
};

export default SearchBar;
