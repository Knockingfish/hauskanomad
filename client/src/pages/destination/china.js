import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/china.webp'
  const destination = 'china'
  const content = "Welcome to China, a vast and diverse land where ancient traditions, modern innovation, and breathtaking landscapes converge to create an unforgettable journey. From the historic wonders of Beijing to the scenic beauty of Guilin, China offers a wealth of experiences waiting to be explored. Explore the dynamic city of Taipei, where modern skyscrapers stand alongside historic temples and bustling night markets. Discover the iconic Taipei 101, once the tallest building in the world, and stroll through the vibrant streets of Ximending, the city's hip and trendy district. Explore the dynamic city of Shanghai, where futuristic skyscrapers and historic landmarks blend seamlessly along the Huangpu River. Wander through the charming streets of the French Concession, explore the bustling markets of Yu Garden, or take in the panoramic views from the iconic Shanghai Tower. Indulge your taste buds with the delicious flavors of Taiwanese cuisine, from mouthwatering street food like stinky tofu and beef noodle soup to delicate xiao long bao (soup dumplings) and pineapple cakes. Whether you're dining at a local night market or a Michelin-starred restaurant, each meal is a culinary adventure waiting to be savored. Discover the natural beauty of China in places like Guilin, where limestone karst formations rise dramatically from emerald-green rivers, creating a landscape straight out of a painting. Cruise along the Li River, hike through the picturesque rice terraces of Longji, or explore the otherworldly landscapes of Zhangjiajie National Forest Park. Whether you're exploring the vibrant street art of Kaohsiung, cycling through the scenic countryside of Sun Moon Lake, or simply sipping tea in a traditional teahouse, Taiwan promises an unforgettable journey filled with warmth, hospitality, and the spirit of adventure. Come, experience the magic of Taiwan and create memories to last a lifetime."

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
        <BookingForm destination="China"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
