import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/south_africa.webp'
  const destination = 'south_africa'
  const content = "Embark on an unforgettable journey to South Africa, where every moment is a celebration of diversity, adventure, and natural beauty. From the rugged coastline of the Garden Route to the vast expanses of the Kruger National Park, South Africa offers a kaleidoscope of experiences waiting to be discovered. Discover the vibrant city life of Cape Town, where the iconic Table Mountain looms majestically over a bustling waterfront adorned with world-class restaurants, galleries, and shops. Dive into the rich history and culture of Johannesburg, where museums and historical sites tell the story of the nation's journey to democracy. Venture into the wild heart of Africa with a safari in the Kruger National Park, home to the Big Five and an abundance of other wildlife species. Explore the dramatic landscapes of the Drakensberg Mountains or embark on an epic road trip along the scenic Garden Route, where breathtaking vistas and charming coastal towns await at every turn. Indulge in the flavors of South African cuisine, from hearty braais (barbecues) to exquisite Cape Malay curries, each dish a tantalizing fusion of flavors influenced by the country's diverse heritage. Whether you seek adrenaline-pumping adventures, cultural immersion, or simply relaxation in breathtaking surroundings, South Africa promises an unforgettable journey filled with warmth, hospitality, and the spirit of Ubuntu. Come, experience the magic of South Africa and let its beauty steal your heart."

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
