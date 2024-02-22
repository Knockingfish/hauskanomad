// Home.js

import React, { useState, useEffect } from 'react';
import CustomHeader from './global/CustomHeader';
import DestinationCard from "./home/DestinationCard";
import Slideshow from "./home/Slideshow";
import SearchBar from './home/SearchBar';
import NewsletterSubscription from "./home/NewsletterSubscription";
import CustomFooter from './global/CustomFooter';
import styles from './Home.module.css';
import destinationData from './destinations.json';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);

  useEffect(() => {
    setDestinations(destinationData);
  }, []);

  const filteredDestinations = destinations.filter(destination =>
    destination.location.some(location => location.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (!startDate || new Date(destination.startDate) >= startDate) &&
    (!endDate || new Date(destination.endDate) <= endDate) &&
    destination.guestCount >= numGuests &&
    destination.roomCount >= numRooms
  );

  return (
    <div className="container">
      <div className={styles.end_container}>
        <CustomHeader />
      </div>

      <div className={styles.slideshow}>
        <Slideshow />
      </div>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        numGuests={numGuests}
        setNumGuests={setNumGuests}
        numRooms={numRooms}
        setNumRooms={setNumRooms}
      />

      <div className={styles.grid_container}>
        <div className={styles.card_grid}>
          {/* Render filtered destinations */}
          {filteredDestinations.map(destination => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>

      <div className={styles.newsletter}>
        <NewsletterSubscription />
      </div>

      <div className={styles.scrollarea}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default Home;
