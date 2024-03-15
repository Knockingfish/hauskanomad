import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/peru.webp'
  const destination = 'peru'
  const content = "Welcome to Peru, a land of ancient civilizations, breathtaking landscapes, and vibrant culture. Nestled in the heart of South America, Peru enchants visitors with its rich history, diverse ecosystems, and culinary delights. Explore the mystical ruins of Machu Picchu, the legendary Inca citadel nestled amidst the misty peaks of the Andes Mountains. Trek along the famous Inca Trail, following in the footsteps of ancient pilgrims, or embark on a scenic train journey through the Sacred Valley to reach this awe-inspiring wonder of the world. Discover the colonial charm of Cusco, once the capital of the Inca Empire, where cobblestone streets, ornate cathedrals, and colorful markets await. Immerse yourself in the vibrant culture of the Andean highlands, where traditional festivals, music, and dance bring ancient traditions to life. Indulge your senses with the exquisite flavors of Peruvian cuisine, from savory ceviche to spicy rocoto relleno, each dish a delightful fusion of indigenous, Spanish, and Asian influences. Whether you're exploring the lush jungles of the Amazon, cruising along the tranquil waters of Lake Titicaca, or marveling at the enigmatic Nazca Lines, Peru promises an unforgettable journey filled with adventure, culture, and natural beauty. Come, experience the magic of Peru and uncover the mysteries of this fascinating land."

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
        <BookingForm destination="Peru"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
