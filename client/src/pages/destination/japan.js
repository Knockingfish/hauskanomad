import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/japan.webp'
  const destination = 'japan'
  const content = "Welcome to Japan, a land of ancient traditions, modern innovation, and timeless beauty. From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers a captivating blend of old and new waiting to be explored. Immerse yourself in the vibrant energy of Tokyo, where towering skyscrapers and neon-lit streets coexist with tranquil gardens and historic shrines. Discover the latest fashion trends in the trendy districts of Shibuya and Harajuku, or indulge in the culinary delights of Tsukiji Fish Market, where sushi masters showcase their skills. Explore the historic city of Kyoto, home to thousands of Buddhist temples, Shinto shrines, and traditional tea houses. Wander through the iconic torii gates of Fushimi Inari Shrine, or marvel at the golden splendor of Kinkaku-ji Temple, reflecting in the tranquil waters of its surrounding pond. Discover the natural beauty of Japan in places like Hokkaido, with its snow-capped mountains and pristine landscapes, or the tropical paradise of Okinawa, with its crystal-clear waters and white sandy beaches. Take a relaxing soak in a traditional onsen (hot spring), where the healing waters rejuvenate both body and soul. Indulge your taste buds with the exquisite flavors of Japanese cuisine, from delicate sushi and sashimi to hearty bowls of ramen and comforting bowls of udon. Whether you're exploring ancient castles, hiking through picturesque landscapes, or experiencing the tranquility of a Zen garden, Japan promises an unforgettable journey filled with culture, beauty, and the warmth of its people. Come, experience the magic of Japan and create memories to last a lifetime."

  return (
    <div>
      <div className={styles.end_container}>
        <CustomHeader />
      </div>
      <div className={styles.top}>
        <ImageComponent image={imageSrc}/>
        <DescriptionComponent content = {content}/>
      </div>
      <div className={styles.middle}>
        <BookingForm destination="Japan"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
