import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DateModal = ({ isOpen, onRequestClose, onSelectDates }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSelectDates = () => {
    onSelectDates([startDate, endDate]);
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
            minDate={startDate}
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
