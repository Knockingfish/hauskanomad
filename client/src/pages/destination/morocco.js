import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/morocco.webp'
  const destination = 'morocco'
  const content = "Welcome to Morocco, where ancient traditions, vibrant colors, and mesmerizing landscapes come together to create an unforgettable journey. Nestled at the crossroads of Africa and Europe, Morocco is a treasure trove of cultural riches and natural beauty waiting to be explored. Explore the bustling medinas of cities like Marrakech and Fez, where labyrinthine streets are filled with the sights, sounds, and scents of daily life. Lose yourself in the vibrant souks, where artisans craft intricate carpets, pottery, and textiles using age-old techniques passed down through generations. Discover the majestic beauty of the Sahara Desert, where towering sand dunes stretch as far as the eye can see and nomadic Berber tribes call the desert home. Embark on a camel trek into the heart of the desert, where you can spend the night under a blanket of stars in a traditional desert camp. Immerse yourself in the rich history of Morocco's imperial cities, where ancient palaces, mosques, and gardens showcase the country's architectural splendor. Marvel at the stunning mosaics of the Hassan II Mosque in Casablanca or wander through the historic Kasbah of the Udayas in Rabat. Indulge your senses with the exotic flavors of Moroccan cuisine, from savory tagines to sweet pastries like baklava and sfenj. Whether you're exploring the rugged beauty of the Atlas Mountains, haggling for treasures in a bustling market, or sipping mint tea in a tranquil riad courtyard, Morocco promises an unforgettable journey filled with warmth, hospitality, and the spirit of adventure. Come, experience the magic of Morocco and let its beauty captivate your soul."

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
        <BookingForm destination="Morocco"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
