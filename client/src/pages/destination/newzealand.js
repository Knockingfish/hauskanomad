import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/new_zealand.webp'
  const content = "Welcome to New Zealand, a land of breathtaking landscapes, friendly locals, and unparalleled adventure. Nestled in the southwestern Pacific Ocean, this island nation offers a diverse range of experiences, from rugged mountains to pristine beaches and everything in between. Explore the enchanting beauty of Fiordland National Park, where towering fiords, cascading waterfalls, and ancient forests create a dramatic and unforgettable landscape. Journey through Middle-earth in Matamata, where the lush green hills of the Hobbiton Movie Set transport you to the fantastical world of J.R.R. Tolkien's imagination. Discover the adrenaline-pumping thrills of Queenstown, the adventure capital of the world, where bungee jumping, skydiving, and jet boating are just a few of the heart-pounding activities on offer. Immerse yourself in the vibrant Maori culture of Rotorua, where geothermal wonders and traditional performances await. Indulge your taste buds with the fresh flavors of New Zealand cuisine, from succulent lamb and seafood to world-renowned wines from the Marlborough region. Whether you're hiking through the majestic landscapes of the Tongariro Alpine Crossing, cruising through the pristine waters of Milford Sound, or simply relaxing on a secluded beach, New Zealand promises an unforgettable journey filled with adventure, beauty, and hospitality. Come, experience the magic of Aotearoa and let its natural wonders steal your heart."

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
        <BookingForm destination="New Zealand"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
