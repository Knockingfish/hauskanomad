import React, { useState } from 'react';
import Modal from 'react-modal';

const GuestRoomModal = ({ isOpen, onRequestClose, onSelectGuestRoom }) => {
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);

  const handleSelect = () => {
    onSelectGuestRoom({ numGuests, numRooms });
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Guest/Room Modal">
      <h2>Select Guests and Rooms</h2>
      <div>
        Guests:
        <input type="number" min="1" value={numGuests} onChange={(e) => setNumGuests(Math.max(1, parseInt(e.target.value)))} />
      </div>
      <div>
        Rooms:
        <input type="number" min="1" value={numRooms} onChange={(e) => setNumRooms(Math.max(1, parseInt(e.target.value)))} />
      </div>
      <button onClick={handleSelect}>Select</button>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default GuestRoomModal;
