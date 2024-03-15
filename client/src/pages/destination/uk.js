import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/uk.webp'
  const content = "Immerse yourself in the timeless charm and rich heritage of the United Kingdom, where history meets modernity in a captivating tapestry of culture, architecture, and natural beauty. From the historic streets of London to the windswept landscapes of the Scottish Highlands, the UK offers an array of experiences to delight every traveler. Discover the iconic landmarks of London, from the majestic Buckingham Palace to the historic Tower of London, where centuries of royal history come to life. Explore the enchanting countryside of England, dotted with picturesque villages, rolling green hills, and ancient stone circles steeped in mystery. Journey to the rugged beauty of the Scottish Highlands, where mist-covered mountains, shimmering lochs, and dramatic castles transport you to a land of timeless allure. Delight your taste buds with traditional British fare, from hearty pub meals to elegant afternoon teas, each dish a delicious reflection of the country's culinary heritage. Whether you're exploring bustling cities, wandering through quaint villages, or hiking along breathtaking coastlines, the United Kingdom promises an unforgettable journey filled with charm, history, and unparalleled hospitality. Come experience the magic of Britain for yourself."

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
        <BookingForm destination="United Kingdom"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
