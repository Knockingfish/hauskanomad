import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/mexico.webp'
  const destination = 'mexico'
  const content = "Bienvenidos a México! Prepare to be enchanted by a land of rich culture, vibrant colors, and warm hospitality. From the pristine beaches of the Riviera Maya to the historic streets of Mexico City, Mexico offers a tapestry of experiences waiting to be explored. Explore the ancient wonders of the Mayan civilization at sites like Chichen Itza, where towering pyramids and intricate stone carvings reveal the secrets of a bygone era. Dive into the crystal-clear waters of the cenotes, natural sinkholes that offer a refreshing escape from the heat and a glimpse into the underworld according to Mayan mythology. Discover the colonial charm of cities like Oaxaca and Guanajuato, where cobblestone streets, colorful facades, and bustling plazas transport you back in time. Immerse yourself in the vibrant traditions of Mexico's indigenous cultures, from the intricate textiles of the Zapotec people to the vibrant celebrations of Dia de los Muertos. Indulge your taste buds with the bold flavors of Mexican cuisine, from spicy salsas and savory tacos to rich mole sauces and refreshing margaritas. Whether you're exploring the lush jungles of Chiapas, snorkeling among vibrant coral reefs, or simply relaxing on a sun-drenched beach, Mexico promises an unforgettable journey filled with beauty, adventure, and the warmth of its people. Come, experience the magic of Mexico and create memories to last a lifetime."

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
