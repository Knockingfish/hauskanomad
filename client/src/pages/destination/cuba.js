import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/cuba.webp'
  const destination = 'cuba'
  const content = "Welcome to Cuba, a vibrant island nation where music, culture, and history collide to create a truly unforgettable experience. From the colorful streets of Havana to the pristine beaches of Varadero, Cuba offers a rich tapestry of sights, sounds, and flavors waiting to be discovered. Explore the captivating beauty of Havana, where vintage cars cruise past colonial-era architecture and lively salsa rhythms fill the air. Wander through the historic streets of Old Havana, a UNESCO World Heritage site, where cobblestone plazas and charming cafes transport you back in time. Discover the rich cultural heritage of Cuba through its music and dance, from the sultry beats of Afro-Cuban jazz to the passionate rhythms of the rumba. Experience the vibrant nightlife of Havana, where live music spills out from bars and clubs onto the streets, inviting you to dance the night away. Relax and unwind on the sun-drenched beaches of Varadero, with their powdery white sands and crystal-clear waters perfect for swimming, snorkeling, and diving. Explore the lush landscapes of Viñales Valley, where tobacco fields and limestone mogotes create a stunning backdrop for hiking and horseback riding. Indulge your taste buds with the rich flavors of Cuban cuisine, from savory ropa vieja to refreshing mojitos and daiquiris. Whether you're exploring the colorful streets of Trinidad, diving into the vibrant coral reefs of Jardines del Rey, or simply soaking up the laid-back atmosphere of the Caribbean, Cuba promises an unforgettable journey filled with warmth, culture, and the spirit of la vida Cubana. Come, experience the magic of Cuba and create memories to last a lifetime."

  return (
    <div>
      <div className={styles.end_container}>
        <CustomHeader />
      </div>
      <div className={styles.top}>
        <ImageComponent image={imageSrc}/>
        <DescriptionComponent content={content}/>
      </div>
      <div className={styles.middle}>
        <BookingForm destination="Cuba"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
