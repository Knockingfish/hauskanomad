import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/india.webp'
  const destination = 'india'
  const content = "Welcome to India, a land of diversity, spirituality, and vibrant colors that will captivate your senses and leave you spellbound. From the majestic Himalayas to the serene backwaters of Kerala, India offers a kaleidoscope of experiences waiting to be explored. Discover the rich tapestry of India's cultural heritage in cities like Delhi, where ancient monuments like the Red Fort and Humayun's Tomb stand alongside bustling markets and vibrant street scenes. Immerse yourself in the spiritual ambiance of Varanasi, the oldest living city in the world, where sacred rituals and ceremonies unfold along the ghats of the Ganges River. Explore the architectural wonders of Rajasthan, with its opulent palaces, majestic forts, and colorful bazaars that harken back to a bygone era of royalty and romance. Journey to the romantic city of Udaipur, with its serene lakes and palatial residences that have earned it the nickname 'Venice of the East.' Indulge your taste buds with the rich flavors of Indian cuisine, from fragrant biryanis and spicy curries to savory street food and sweet treats like gulab jamun and jalebi. Whether you're dining at a luxurious restaurant or sampling street food from a bustling market, each dish is a delicious journey through the diverse culinary traditions of India. Experience the natural beauty of India in places like Kerala, where tranquil backwaters, lush tea plantations, and palm-fringed beaches offer a serene escape from the hustle and bustle of city life. Trek through the breathtaking landscapes of the Himalayas, where snow-capped peaks, pristine lakes, and ancient monasteries await. Whether you're exploring the ancient ruins of Hampi, marveling at the iconic Taj Mahal, or embarking on a wildlife safari in one of India's national parks, India promises an unforgettable journey filled with warmth, hospitality, and the spirit of adventure. Come, experience the magic of India and create memories to last a lifetime.";

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
        <BookingForm destination="India"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
