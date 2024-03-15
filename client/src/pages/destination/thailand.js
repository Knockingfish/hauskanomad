import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/thailand.webp'
  const content = "Embark on a journey to Thailand, where ancient traditions blend seamlessly with modern indulgence, creating a tapestry of experiences that will enchant your senses and captivate your soul. From the bustling streets of Bangkok to the tranquil shores of its tropical islands, Thailand beckons with its vibrant culture, exquisite cuisine, and breathtaking natural beauty. Explore the vibrant city of Bangkok, where glittering temples stand alongside bustling markets and futuristic skyscrapers. Lose yourself in the maze of narrow alleys and colorful stalls of the Chatuchak Weekend Market, or marvel at the serene beauty of the Grand Palace and Wat Pho. Escape to the idyllic beaches of Thailand's southern islands, where crystal-clear waters lap against powdery white sands fringed by swaying palm trees. Dive into the vibrant underwater world of the Andaman Sea or simply relax and unwind under the warm tropical sun. Indulge your taste buds with the tantalizing flavors of Thai cuisine, from fiery street food to exquisite royal dishes fit for a king. Whether you're exploring ancient ruins, trekking through lush jungles, or simply relaxing in a luxurious spa, Thailand promises an unforgettable adventure that will leave you longing to return again and again. Come, discover the Land of Smiles and let Thailand steal your heart."

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
        <BookingForm destination="Thailand"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
