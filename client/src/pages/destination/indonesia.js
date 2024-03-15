import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/indonesia.webp'
  const destination = 'indonesia'
  const content = "Welcome to Indonesia, an archipelago of over 17,000 islands where adventure, culture, and natural beauty await at every turn. From the bustling streets of Jakarta to the tranquil shores of Bali, Indonesia offers a diverse range of experiences that will enchant and inspire you. Explore the vibrant culture and history of Indonesia in cities like Yogyakarta, where ancient temples like Borobudur and Prambanan stand as testament to the country's rich heritage. Discover the bustling markets, colorful festivals, and traditional arts and crafts that bring the spirit of Indonesia to life. Indulge your senses with the exotic flavors of Indonesian cuisine, from fiery sambals and aromatic curries to mouthwatering satay and fragrant rice dishes. Whether you're dining at a local warung (street food stall) or a world-class restaurant, each meal is a delicious adventure waiting to be savored. Escape to the paradise island of Bali, where lush rice terraces, pristine beaches, and sacred temples create a tranquil oasis in the heart of the Indian Ocean. Immerse yourself in the island's vibrant arts scene, with traditional dance performances, Balinese gamelan music, and intricate woodcarvings to discover. Discover the breathtaking natural beauty of Indonesia in places like Komodo National Park, home to the legendary Komodo dragons and some of the world's most pristine coral reefs. Dive into the crystal-clear waters of Raja Ampat, where you'll encounter a kaleidoscope of marine life in one of the most biodiverse regions on Earth. Whether you're trekking through the jungles of Sumatra, exploring the ancient ruins of Java, or simply relaxing on a secluded beach, Indonesia promises an unforgettable journey filled with warmth, hospitality, and the spirit of adventure. Come, experience the magic of Indonesia and create memories to last a lifetime."

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
        <BookingForm destination="Indonesia"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
