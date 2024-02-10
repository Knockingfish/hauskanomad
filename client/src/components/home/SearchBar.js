import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GuestRoomCounter from './search/GuestRoomCounter'; // Import the custom GuestRoom counter component

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
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a destination..."
        value={textQuery}
        onChange={handleInputChange}
      />

      {/* Render dropdown only when there are search results and dropdown is set to show */}
      {showDropdown && (
        <div className="search-results-dropdown">
          {searchResults.map((result, index) => (
            <div key={index} onClick={() => handleResultClick(result)}>{result}</div>
          ))}
        </div>
      )}

      <div className="calendar-container">
        <div className="calendar">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date"
          />
        </div>

        <div className="calendar">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select end date"
          />
        </div>
      </div>

      {/* Use the custom GuestRoom counter component */}
      <div className="guest-room-selection">
        <GuestRoomCounter label="Guests" value={numGuests} onIncrement={incrementGuests} onDecrement={decrementGuests} />
        <GuestRoomCounter label="Rooms" value={numRooms} onIncrement={incrementRooms} onDecrement={decrementRooms} />
      </div>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
