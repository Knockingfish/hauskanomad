import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/australia.webp'
  const content = "Experience the epitome of adventure and natural splendor in Australia, where every moment is a captivating journey. From the sun-kissed beaches of the Gold Coast to the rugged landscapes of the Outback, Australia offers a kaleidoscope of experiences waiting to be discovered. Embark on a thrilling dive into the Great Barrier Reef, the world's largest coral reef system, teeming with vibrant marine life and breathtaking underwater vistas. Explore the ancient allure of the Red Centre, where the iconic Uluru stands majestically against the vast desert backdrop, inviting you to witness unforgettable sunsets and star-filled nights. Indulge in the cosmopolitan delights of Sydney and Melbourne, where vibrant culture, world-class dining, and pulsating nightlife await at every turn. Whether you seek adrenaline-pumping adventures, serene natural wonders, or cultural immersion, Australia promises an unforgettable journey filled with endless possibilities. Start your adventure Down Under today and unlock the secrets of this remarkable land.";

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
        <BookingForm className={styles.book} destination="Australia" />
        <BookingInfo/>
      </div>
      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
