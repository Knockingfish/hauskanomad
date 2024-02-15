import React, { useEffect, useState } from "react";
import CustomHeader from './global/CustomHeader'
import DestinationCard from "./home/DestinationCard";
import SearchBar from "./home/SearchBar";
import Slideshow from "./home/Slideshow";
import NewsletterSubscription from "./home/NewsletterSubscription";
import CustomFooter from './global/CustomFooter';
import styles from './Home.module.css';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'HauskaNomad - Home Page';
    fetchDestinations();
  }, []);

  const fetchDestinations = () => {
    fetch("http://localhost:5000/api/destinations")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data.destinations);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className={styles.scrollarea}>
        <CustomHeader />
      </div>

      <div className="slideshow">
        <Slideshow />
      </div>

      <div className={styles.scrollarea}>
        <SearchBar />
      </div>

      <div className={styles.grid_container}>
        <div className={styles.card_grid}>
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>

      <div className="newsletter-section">
        <NewsletterSubscription />
      </div>

      <div className={styles.scrollarea}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default Home;
