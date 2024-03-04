import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/philippines.webp'
  const destination = 'philippines'
  const content = "Welcome to the Philippines, a tropical paradise brimming with natural wonders, vibrant culture, and warm hospitality. With over 7,000 islands scattered like emeralds in the turquoise waters of the Pacific Ocean, the Philippines offers endless opportunities for exploration and adventure. Discover the pristine beaches of Boracay, hailed as one of the best in the world, where powdery white sands meet crystal-clear waters teeming with colorful marine life. Dive into the underwater wonderland of Tubbataha Reef, a UNESCO World Heritage site renowned for its biodiversity and stunning coral reefs. Explore the cultural melting pot of Manila, where historic landmarks, lively markets, and bustling streets showcase the country's rich heritage. Wander through the colonial-era streets of Intramuros, or immerse yourself in the vibrant atmosphere of the bustling markets of Quiapo and Divisoria. Indulge your taste buds with the diverse flavors of Filipino cuisine, from savory adobo to sweet halo-halo, each dish a tantalizing blend of Spanish, Chinese, and Malay influences. Whether you're trekking through the lush jungles of Palawan, island-hopping in the Visayas, or relaxing on the pristine beaches of Cebu, the Philippines promises an unforgettable journey filled with beauty, adventure, and the warmth of its people. Come, experience the magic of the Philippines and create memories to last a lifetime."

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
