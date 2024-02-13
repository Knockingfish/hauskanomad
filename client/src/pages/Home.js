import React, { useEffect, useState } from "react";
import CustomHeader from '../components/global/CustomHeader'
import DestinationCard from "../components/home/DestinationCard";
import SearchBar from "../components/home/SearchBar";
import Slideshow from "../components/home/Slideshow";
import NewsletterSubscription from "../components/home/NewsletterSubscription";
import CustomFooter from '../components/global/CustomFooter';
import styles from './Home.module.css';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Home Page';
  }, []);

  useEffect(() => {
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
  }, []);

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

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className={styles.scrollarea}>
        <div className={styles.card_grid}>
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>

      <div className="newsletter-section">
        <NewsletterSubscription />
      </div>

      <div className="footer">
        <CustomFooter />
      </div>
    </div>
  );
};

export default Home;
