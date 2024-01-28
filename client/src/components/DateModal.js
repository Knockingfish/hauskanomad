// W
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

// Treat modal windows as root elements
// Improves window focus behavior and makes it more accessible to screen readers
Modal.setAppElement('#root');

// Function creates modal window for user input for aesthetic purposes
const DateModal = ({ isOpen, onRequestClose, onSelectDates }) => {
  // Create states for start and end dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Update state for startDate and endDate based on user interaction
  const handleSelectDates = () => {
    onSelectDates([startDate, endDate]); // Passes values to parent component
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Date Range Modal">
      <h2>Select Date Range</h2>
      <div className="calendar-container">
        {/* Start Date Calendar */}
        <div className="calendar">
          <label>Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date"
          />
        </div>

        {/* End Date Calendar */}
        <div className="calendar">
          <label>End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate} /* Cannot select an end date prior to start date */
            placeholderText="Select end date"
          />
        </div>
      </div>

      <button onClick={handleSelectDates}>Apply</button>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default DateModal;
