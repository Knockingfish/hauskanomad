import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/sanfrancisco.webp'
  const destination = 'san_francisco'
  const content = "Welcome to San Francisco, where innovation meets culture, and every street corner holds a new adventure waiting to be discovered. Nestled along the picturesque shores of the San Francisco Bay, this iconic city captivates visitors with its eclectic charm, iconic landmarks, and vibrant neighborhoods. Explore the iconic Golden Gate Bridge, its majestic orange towers spanning the entrance to the bay, offering breathtaking views of the city skyline and Alcatraz Island. Stroll through the historic streets of the lively Fisherman's Wharf, where seafood stalls, street performers, and iconic attractions like Pier 39 await. Discover the bohemian spirit of the Haight-Ashbury district, birthplace of the hippie movement, where colorful Victorian houses and quirky boutiques line the streets. Immerse yourself in the rich cultural tapestry of Chinatown, the oldest and largest in North America, where bustling markets, authentic cuisine, and ornate temples await. Indulge your senses with world-class dining, from Michelin-starred restaurants to trendy food trucks, showcasing the city's diverse culinary landscape. Whether you're exploring the vibrant arts scene of the Mission District, riding the iconic cable cars, or soaking in the views from Twin Peaks, San Francisco promises an unforgettable journey filled with endless possibilities. Come, experience the magic of the City by the Bay and create memories to last a lifetime."

  return (
    <div>
      <div className={styles.end_container}>
        <CustomHeader />
      </div>
      <div className={styles.top}>
        <ImageComponent image={imageSrc}/>
        <DescriptionComponent content={content} />
      </div>
      <div className={styles.middle}>
        <BookingForm/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
