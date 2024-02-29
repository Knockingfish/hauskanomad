import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import CustomHeader from '../global/CustomHeader';
import DestinationCard from "./components/DestinationCard";
import Slideshow from "./components/Slideshow";
import SearchBar from './components/SearchBar';
import NewsletterSubscription from "./components/NewsletterSubscription";
import CustomFooter from '../global/CustomFooter';
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
    document.title = 'HauskaNomad - Home';
  }, []);

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
            <Link key={destination.id} to={`/${destination.name}`}> {/* Wrap DestinationCard with Link */}
              <DestinationCard destination={destination} />
            </Link>
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
