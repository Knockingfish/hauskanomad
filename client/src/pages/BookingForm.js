import React from 'react';

function BookingForm() {
  return (
    <div>
      <h1>Booking Form</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Travel Package:
          <select>
            <option value="package1">Package 1</option>
            <option value="package2">Package 2</option>
            <option value="package3">Package 3</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
