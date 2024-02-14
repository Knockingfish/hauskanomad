import React, { useEffect, useState } from "react";
import CustomHeader from '../components/global/CustomHeader'
import DestinationCard from "../components/home/DestinationCard";
import SearchBar from "../components/home/SearchBar";
import Slideshow from "../components/home/Slideshow";
import NewsletterSubscription from "../components/home/NewsletterSubscription";
import CustomFooter from '../components/global/CustomFooter';
import styles from './Home.module.css';

const Home = () => {
  const [containerWidth, setContainerWidth] = useState(window.screen.width);
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

  useEffect(() => {
    function updateWidth() {
      setContainerWidth(window.screen.width);
    }

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
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

      <div className={styles.scrollarea}>
        <SearchBar />
      </div>

      <div className={styles.scrollarea2}>
        <div className={styles.card_grid} style={{ width: containerWidth }}>
          {/* Split destinations array into three columns */}
          {[0, 1, 2].map(column => (
            <div key={column} className={styles.column}>
              {destinations.map((destination, index) => {
                if (index % 3 === column) {
                  return <DestinationCard key={destination.id} destination={destination} />;
                }
                return null;
              })}
            </div>
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
