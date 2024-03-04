import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/nigeria.webp'
  const destination = 'nigeria'
  const content = "Welcome to Nigeria, a vibrant and diverse country in West Africa known for its rich cultural heritage, bustling cities, and stunning natural landscapes. From the bustling streets of Lagos to the tranquil waters of the Niger Delta, Nigeria offers a wealth of experiences waiting to be discovered. Explore the dynamic city of Lagos, the commercial heart of Nigeria, where modern skyscrapers stand alongside historic landmarks and colorful markets. Dive into the thriving arts scene of the city, with galleries, music venues, and street art festivals showcasing the creativity of Nigerian artists. Discover the rich history and culture of Nigeria in cities like Benin City, with its ancient artifacts and royal palaces, and Ibadan, home to one of the largest markets in Africa. Explore the stunning natural beauty of Nigeria in places like Yankari National Park, where you can spot elephants, lions, and other wildlife in their natural habitat. Indulge in the flavors of Nigerian cuisine, from spicy jollof rice to savory suya, each dish a delicious reflection of the country's diverse culinary traditions. Whether you're exploring historic sites, embarking on a safari, or simply soaking up the vibrant atmosphere of Nigerian cities, a journey to Nigeria promises an unforgettable adventure filled with warmth, hospitality, and cultural richness. Come, experience the magic of Nigeria and create memories to last a lifetime."

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
