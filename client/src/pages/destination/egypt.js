import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/egypt.webp'
  const destination = 'egypt'
  const content = "Welcome to Egypt, a land of ancient wonders, timeless beauty, and unparalleled history that beckons you to explore its majestic monuments, vibrant cities, and breathtaking landscapes. Discover the iconic wonders of ancient Egypt, from the towering pyramids of Giza to the enigmatic Sphinx, where millennia-old mysteries continue to captivate the imagination of travelers from around the world. Explore the fascinating temples of Luxor and Karnak, where towering columns and intricate hieroglyphs tell the stories of gods and pharaohs. Cruise along the timeless waters of the Nile River, the lifeblood of Egypt, where traditional feluccas glide silently past verdant riverbanks and historic villages. Marvel at the stunning beauty of the Valley of the Kings, where the tombs of ancient pharaohs reveal treasures beyond imagination. Immerse yourself in the vibrant culture of modern Egypt in cities like Cairo, where bustling markets, lively cafes, and vibrant street scenes showcase the spirit and resilience of its people. Explore the medieval streets of Islamic Cairo, home to historic mosques, madrasas, and the vibrant Khan El Khalili bazaar. Indulge your senses with the exotic flavors of Egyptian cuisine, from savory koshari and flavorful falafel to sweet pastries like baklava and basbousa. Whether you're dining on a traditional feast aboard a Nile cruise or sampling street food from a bustling souk, each meal is a delicious journey through the flavors of the Middle East. Whether you're exploring the pristine beaches of the Red Sea, diving among colorful coral reefs, or simply marveling at the timeless beauty of Egypt's ancient monuments, Egypt promises an unforgettable journey filled with wonder, adventure, and the magic of the Nile. Come, experience the enchantment of Egypt and create memories to last a lifetime."

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
        <BookingForm destination="Egypt"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
