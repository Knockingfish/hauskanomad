import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/hawaii.webp'
  const destination = 'hawaii'
  const content = "Welcome to Hawaii, the paradise of the Pacific, where stunning landscapes, warm hospitality, and rich cultural heritage combine to create an unforgettable experience. From the lush valleys of Kauai to the volcanic wonders of the Big Island, Hawaii offers a diverse range of experiences waiting to be explored. Discover the natural beauty of Hawaii's islands, from the breathtaking cliffs of the Na Pali Coast to the vibrant marine life of Molokini Crater. Immerse yourself in the rich Hawaiian culture through traditional hula performances, lei-making workshops, and visits to sacred sites like the Pu'uhonua o Honaunau National Historical Park. Indulge your senses with the exquisite flavors of Hawaiian cuisine, from fresh poke bowls and grilled mahi-mahi to tropical fruits like pineapple and coconut. Whether you're dining at a luau feast or sampling local specialties from food trucks, each meal is a delicious celebration of the island's bounty. Relax and unwind on the sun-drenched beaches of Waikiki, where palm trees sway in the gentle breeze and the turquoise waters beckon you to swim, surf, or simply soak up the sun. Explore the lush rainforests and cascading waterfalls of Maui's Hana Highway, or hike to the summit of Haleakala Crater to witness a breathtaking sunrise above the clouds. Whether you're snorkeling among colorful coral reefs, exploring the volcanic landscapes of Hawaii Volcanoes National Park, or simply sipping a mai tai as you watch the sunset over the Pacific, Hawaii promises an unforgettable journey filled with beauty, adventure, and the aloha spirit. Come, experience the magic of Hawaii and create memories to last a lifetime."

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
