import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './SearchBar.module.css';
import { useDarkMode } from '../global/DarkModeContext';
import Rule from '../global/Rule';

const SearchBar = ({ searchQuery, setSearchQuery, startDate, setStartDate, endDate, setEndDate, numGuests, setNumGuests, numRooms, setNumRooms }) => {
  const { darkMode } = useDarkMode();
  const [showMenu, setShowMenu] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery(value); // Update search query
  };

  return (
    <div className={styles.search_container}>
      <Rule/>
      <div className={styles.search_bg}>
        <p className={styles.title}>Search</p>
        <p className={styles.content}>Placeholder text because it kind of helps the "style"</p>
        <div className={styles.search_bar}>
          {/* Dropdown search"bar" */}
          <div className={styles.drop_container}>
            <button className={styles.drop_button} onClick={() => setShowMenu(!showMenu)}>
              <img
                className={styles.drop_icon}
                src={darkMode ? '/down_dark.png' : '/down_light.png'}
                alt="drop"
              />
            </button>
            {showMenu && (
              <div className={styles.search_menu}>
                <div className={styles.menu_section}>
                  <input
                    className={styles.menu_item1}
                    type="text"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    name="textQuery"
                  />
                  <DatePicker
                    className={styles.menu_item2}
                    calendarClassName={styles.calendar}
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Select start date..."
                  />
                  <DatePicker
                    className={styles.menu_item3}
                    calendarClassName={styles.calendar}
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="Select end date..."
                  />
                  <div className={styles.slider_menu1}>
                    <span className={styles.range_item}>Guests: {numGuests}</span>
                    <input
                      type="range"
                      value={numGuests}
                      min={1}
                      max={10}
                      onChange={(e) => setNumGuests(parseInt(e.target.value))}
                    />
                  </div>
                  <div className={styles.slider_menu2}>
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
              </div>
            )}
          </div>
          {/* Expanded searchbar */}
          <div className={styles.bar_section}>
            <input
              className={styles.bar_item1}
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={handleInputChange}
              name="textQuery"
            />
            <DatePicker
              className={styles.bar_item2}
              calendarClassName={styles.calendar}
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select start date..."
            />
            <DatePicker
              className={styles.bar_item3}
              calendarClassName={styles.calendar}
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select end date..."
            />
            <div className={styles.slider_item1}>
              <span className={styles.range_item}>Guests: {numGuests}</span>
              <input
                type="range"
                value={numGuests}
                min={1}
                max={10}
                onChange={(e) => setNumGuests(parseInt(e.target.value))}
              />
            </div>
            <div className={styles.slider_item2}>
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
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
