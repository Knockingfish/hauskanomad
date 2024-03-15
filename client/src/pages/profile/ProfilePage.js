import React, { useEffect, useState } from 'react';
import CustomHeader from '../global/CustomHeader';
import CustomFooter from '../global/CustomFooter';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'HauskaNomad - Profile';
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Booking data:', data);

        // Check if data object and data array are defined
        if (data && data.data && Array.isArray(data.data)) {
          setBookings(data.data);
          setLoading(false);
        } else {
          console.error('Invalid booking data format:', data);
        }
      } else {
        console.error('Failed to fetch bookings:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    console.log('Bookings:', bookings);
  }, [bookings]);

  const handleDeleteBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.ok) {
        // Remove the deleted booking from the state
        setBookings(bookings.filter(booking => booking._id !== id));
      } else {
        console.error('Failed to delete booking:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div>
      <div className={styles.end_container}>
        <CustomHeader />
      </div>
      <div className={styles.container}>
        <div className={styles.float}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2>Your Bookings</h2>
              {bookings.length === 0 ? (
                <p className={styles.booking}>No bookings found.</p>
              ) : (
                bookings.map(booking => (
                  <div key={booking._id} className={styles.booking}>
                    <p>Destination: {booking.destination}</p>
                    <p>Start Date: {new Date(booking.startDate).toLocaleDateString()}</p>
                    <p>End Date: {new Date(booking.endDate).toLocaleDateString()}</p>
                    <p>Guests: {booking.guests}</p>
                    <p>Rooms: {booking.rooms}</p>
                    <button className={styles.click} onClick={() => handleDeleteBooking(booking._id)}>CANCEL</button> {/* Delete button */}
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>
      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default ProfilePage;
