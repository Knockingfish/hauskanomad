import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './SearchBar.module.css';
import { useDarkMode } from '../global/DarkModeContext';

const SearchBar = ({ isDarkMode }) => {
  const [textQuery, setTextQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const { darkMode } = useDarkMode();

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

  console.log('Dark mode:', darkMode);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <div className={styles.bar_section}>
          <input
            className={styles.bar_item}
            type="text"
            placeholder="Search destinations..."
            value={textQuery}
            onChange={handleInputChange}
            name="textQuery"
          />
          <DatePicker
            className={styles.bar_item}
            calendarClassName={styles.calendar}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date..."
          />
          <DatePicker
            className={styles.bar_item}
            calendarClassName={styles.calendar}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
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
        <button className={styles.search_button} onClick={handleSearch}>
          <img
            className={styles.search_icon}
            src={darkMode ? '/search_dark.png' : '/search_light.png'}
          />
        </button>
      </div>
      <div>
        {showDropdown && (
          <div className={styles.dropdown}>
            {searchResults.map((result, index) => (
              <div className={styles.dropdown_item} key={index} onClick={() => handleResultClick(result)}>{result}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
