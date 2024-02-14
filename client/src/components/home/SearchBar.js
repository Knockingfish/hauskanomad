import React, { useState, useEffect } from 'react';
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
    const { name, value } = e.target;
    if (name === 'numGuests') {
      setNumGuests(parseInt(value));
    } else if (name === 'numRooms') {
      setNumRooms(parseInt(value));
    } else {
      setTextQuery(value);
      if (value.trim() === '') {
        setShowDropdown(false);
      } else {
        handleSearchSuggestions(value);
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
              name="textQuery"
            />
          </div>
          <div className={styles.bar_section}>
            <DatePicker
              className={styles.date_item}
              calendarClassName={styles.calendar}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select start date"
            />
            <DatePicker
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
          </div>
          <CustomNumberInput
            value={numGuests}
            label="Guests: "
            onChange={(value) => setNumGuests(parseInt(value))}
          />
          <CustomNumberInput
            value={numRooms}
            label="Rooms: "
            onChange={(value) => setNumRooms(parseInt(value))}
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
