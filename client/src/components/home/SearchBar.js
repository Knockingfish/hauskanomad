import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GuestRoomCounter from './search/GuestRoomCounter';
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [textQuery, setTextQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setTextQuery(query);
    if (query.trim() === '') {
      setShowDropdown(false);
    } else {
      handleSearchSuggestions(query);
    }
  };

  const handleSearchSuggestions = (query) => {
    // Hardcoded search suggestions for testing
    const suggestions = ['New York', 'London', 'Paris', 'Tokyo'].filter(result =>
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

  const incrementGuests = () => {
    setNumGuests(prevNumGuests => prevNumGuests + 1);
  };

  const decrementGuests = () => {
    if (numGuests > 1) {
      setNumGuests(prevNumGuests => prevNumGuests - 1);
    }
  };

  const incrementRooms = () => {
    setNumRooms(prevNumRooms => prevNumRooms + 1);
  };

  const decrementRooms = () => {
    if (numRooms > 1) {
      setNumRooms(prevNumRooms => prevNumRooms - 1);
    }
  };

  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <div>
          <input
            className={styles.bar_item}
            type="text"
            placeholder="Search for a destination..."
            value={textQuery}
            onChange={handleInputChange}
          />

          <div className={styles.dropdown}>
              {showDropdown && (
                <div>
                  {searchResults.map((result, index) => (
                    <div className={styles.dropdown_item} key={index} onClick={() => handleResultClick(result)}>{result}</div>
                  ))}
                </div>
              )}
          </div>
        </div>

        <div>
          <DatePicker
            className={styles.bar_item}
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

        <div>
          <DatePicker
            className={styles.bar_item}
            calendarClassName={styles.customCalendar}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select end date"
          />
        </div>

        <GuestRoomCounter label="Guests" value={numGuests} onIncrement={incrementGuests} onDecrement={decrementGuests} />
        <GuestRoomCounter label="Rooms" value={numRooms} onIncrement={incrementRooms} onDecrement={decrementRooms} />

        <button className={styles.search_button} onClick={handleSearch}>SEARCH</button>
      </div>
    </div>
  );
};

export default SearchBar;
