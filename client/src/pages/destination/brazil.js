import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/brazil.webp'
  const destination = 'brazil'
  const content = "Experience the vibrant rhythms and diverse landscapes of Brazil, where every corner holds a new adventure and a captivating story waiting to be discovered. From the lush Amazon rainforest to the golden beaches of Rio de Janeiro, Brazil is a land of unparalleled beauty and cultural richness. Dive into the heart of the Amazon, the world's largest tropical rainforest, and immerse yourself in its awe-inspiring biodiversity and indigenous traditions. Feel the pulsating energy of Rio de Janeiro during Carnival, where samba beats and colorful parades ignite the streets in a celebration of life and passion. Explore the majestic Iguazu Falls, where cascading waterfalls plunge into the misty abyss, creating a breathtaking spectacle of nature's power and beauty. Indulge your senses in the culinary delights of Brazilian cuisine, from savory feijoada to succulent churrasco, each dish a tantalizing fusion of flavors. Whether you seek adrenaline-fueled adventures, cultural immersion, or simply relaxation under the warm Brazilian sun, let Brazil enchant you with its warmth, diversity, and unending charm. Your unforgettable journey awaits in the heart of South America."

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
        <BookingForm destination="Brazil"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
