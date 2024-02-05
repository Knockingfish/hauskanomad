// W
import React, { useState } from 'react';
import DateModal from '../DateModal';
import GuestRoomModal from '../GuestRoomModal';

const SearchBar = () => {
  // Create states for each input and output
  const [textQuery, setTextQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const [suggestions, setSuggestions] = useState([]);

  // Set modals to closed by default
  const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
  const [guestRoomModalIsOpen, setGuestRoomModalIsOpen] = useState(false);

  // Handles opening and closing of modal windows based on user input.
  const openDateModal = () => setDateModalIsOpen(true);
  const closeDateModal = () => setDateModalIsOpen(false);
  const openGuestRoomModal = () => setGuestRoomModalIsOpen(true);
  const closeGuestRoomModal = () => setGuestRoomModalIsOpen(false);

  // Updates start and end date based on user input
  const handleDateSelect = (dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
    closeDateModal();
  };

  // Updates guest and room count based on user input
  const handleGuestRoomSelect = ({ numGuests, numRooms }) => {
    setNumGuests(numGuests);
    setNumRooms(numRooms);
  };

  // Currently logs search input to console for debugging purposes
  // Will be replaced at future date with an API call
  const handleSearch = () => {
    console.log('Search clicked!');
    console.log('Text Query:', textQuery);
    console.log('Date Range:', startDate, endDate);
    console.log('Guests:', numGuests);
    console.log('Rooms:', numRooms);
  };

  // Mockup of search suggestions being generated based on input
  const handleInputChange = (e) => {
    const query = e.target.value;
    setTextQuery(query);

    // Simulate fetching suggestions based on the query
    // Replace this with actual fetching logic from backend
    const fetchedSuggestions = ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'];
    setSuggestions(fetchedSuggestions);
  };

  // Allow search suggestions to be selected, completing the query
  const handleSuggestionClick = (suggestion) => {
    setTextQuery(suggestion);
    setSuggestions([]); // Clear suggestions once selection is made
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
