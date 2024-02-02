import React, { useState } from 'react';
import ImageComponent from './ImageComponent'; 
import DescriptionComponent from './DescriptionComponent'; 
import BookingInfo from './BookingInfo'; 
import BookingForm from './BookingForm'; 
import ReviewComments from './ReviewComments'; 

const DestinationPage = () => {
  // Sample data for demonstration, replace with actual data from backend or state management
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const marketingContent = 'Discover the beauty of this amazing destination!';
  const bookingInfo = {
    price: '$100 per night',
    capacity: { guests: 2, rooms: 1 },
    availableDates: ['2024-02-10', '2024-02-15', '2024-02-20'],
    restrictions: ['No pets', 'No smoking'],
  };
  const reviews = [
    { comment: 'Great place!', score: 5, username: 'User123' },
    { comment: 'Nice experience', score: 4, username: 'Traveler456' },
  ];

  // State for handling booking form submission
  const [bookingData, setBookingData] = useState(null);

  const handleBookingSubmit = (data) => {
    // Handle booking data submission (e.g., send to backend for processing)
    console.log('Booking submitted:', data);
    setBookingData(data); //to update state or trigger further actions here
  };

  return (
    <div>
      <h1>Destination Page</h1>
      
      {/* Image Component */}
      <ImageComponent images={images} />

      {/* Description Component */}
      <DescriptionComponent description={description} marketingContent={marketingContent} />

      {/* Booking Info Component */}
      <BookingInfo {...bookingInfo} />

      {/* Booking Form Component */}
      <BookingForm onSubmit={handleBookingSubmit} />

      {/* Displaying Booking Confirmation or Success Message */}
      {bookingData && (
        <div>
          <h2>Booking Confirmation</h2>
          <p>Date: {bookingData.selectedDate}</p>
          <p>Guests: {bookingData.guests}</p>
          <p>Rooms: {bookingData.rooms}</p>
          {/* payment and other details as needed */}
        </div>
      )}

      {/* Review and Comments Component */}
      <ReviewComments reviews={reviews} />
    </div>
  );
};

export default DestinationPage;
