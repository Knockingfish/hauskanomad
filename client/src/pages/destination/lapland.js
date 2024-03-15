import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/lapland.webp'
  const destination = 'lapland'
  const content = "Welcome to Lapland, a magical land of snow-covered forests, sparkling Northern Lights, and enchanting winter wonderlands. Located in the northernmost region of Finland, Lapland offers a truly unique and unforgettable Arctic experience. Experience the thrill of dog sledding through pristine wilderness, where the only sounds you'll hear are the soft padding of paws on snow and the whisper of the wind through the trees. Explore the vast expanse of Lapland's national parks, where reindeer roam freely and frozen lakes glisten in the winter sun. Embark on a once-in-a-lifetime journey to witness the mesmerizing Northern Lights dance across the night sky, painting it with vibrant hues of green, purple, and pink. Stay in a cozy glass igloo or traditional log cabin, where you can watch this natural spectacle from the comfort of your own bed. Immerse yourself in the rich culture of the indigenous Sámi people, learning about their traditional way of life and the importance of reindeer herding in this remote region. Indulge in the hearty flavors of Finnish cuisine, from warming soups and stews to sweet treats like pulla (cardamom bread) and korvapuusti (cinnamon rolls). Whether you're racing across the snow on a snowmobile, gliding through the wilderness on cross-country skis, or simply relaxing in a traditional sauna, Lapland promises an unforgettable winter adventure filled with warmth, wonder, and the magic of the Arctic. Come, experience the enchantment of Lapland and create memories to last a lifetime."

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
        <BookingForm destination="Lapland"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
