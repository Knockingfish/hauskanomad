import React, { useState } from 'react';
import DateModal from './DateModal';
import GuestRoomModal from './GuestRoomModal';

const SearchBar = () => {
  const [textQuery, setTextQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const [suggestions, setSuggestions] = useState([]);

  const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
  const [guestRoomModalIsOpen, setGuestRoomModalIsOpen] = useState(false);

  const openDateModal = () => setDateModalIsOpen(true);
  const closeDateModal = () => setDateModalIsOpen(false);
  const openGuestRoomModal = () => setGuestRoomModalIsOpen(true);
  const closeGuestRoomModal = () => setGuestRoomModalIsOpen(false);

  const handleDateSelect = (dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
    closeDateModal();
  };

  const handleGuestRoomSelect = ({ numGuests, numRooms }) => {
    setNumGuests(numGuests);
    setNumRooms(numRooms);
  };

  const handleSearch = () => {
    console.log('Search clicked!');
    console.log('Text Query:', textQuery);
    console.log('Date Range:', startDate, endDate);
    console.log('Guests:', numGuests);
    console.log('Rooms:', numRooms);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setTextQuery(query);

    // Simulate fetching suggestions based on the query
    // Replace this with actual fetching logic from your backend
    const fetchedSuggestions = ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'];
    setSuggestions(fetchedSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    // Handle the selected suggestion (e.g., set it as the query)
    setTextQuery(suggestion);
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div className="search-bar">
      {/* Text Search with Suggestions */}
      <input
        type="text"
        placeholder="Search for a destination..."
        value={textQuery}
        onChange={handleInputChange}
      />
      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <div key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </div>
        ))}
      </div>

      {/* Date Range */}
      <button onClick={openDateModal}>Select Date Range</button>
      <DateModal isOpen={dateModalIsOpen} onRequestClose={closeDateModal} onSelectDates={handleDateSelect} />

      {/* Guest/Room Selection Modal */}
      <button onClick={openGuestRoomModal}>Select Guests and Rooms</button>
      <GuestRoomModal isOpen={guestRoomModalIsOpen} onRequestClose={closeGuestRoomModal} onSelectGuestRoom={handleGuestRoomSelect} />

      {/* Search Button */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
