import React, { useEffect, useState } from "react";
import CustomHeader from './global/CustomHeader'
import DestinationCard from "./home/DestinationCard";
import Slideshow from "./home/Slideshow";
import NewsletterSubscription from "./home/NewsletterSubscription";
import CustomFooter from './global/CustomFooter';
import styles from './Home.module.css';

const Home = () => {
  const [destinations, setDestinations] = useState([]);

  return (
    <div className="container">
      <div className={styles.end_container}>
        <CustomHeader />
      </div>

      <div className="slideshow">
        <Slideshow />
      </div>

      <div className={styles.grid_container}>
        <div className={styles.card_grid}>
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
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
