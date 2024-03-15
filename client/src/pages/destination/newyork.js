import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/new_york.webp'
  const destination = 'new_york'
  const content = "Welcome to New York, the city that never sleeps and the ultimate playground for adventurers, dreamers, and culture enthusiasts alike. Nestled along the iconic shores of the Hudson River, New York City is a vibrant metropolis bursting with energy, diversity, and endless possibilities. Explore the iconic landmarks of Manhattan, from the towering skyscrapers of Midtown to the historic charm of Greenwich Village. Take a leisurely stroll through Central Park, where lush greenery, tranquil ponds, and hidden gems await around every corner. Discover the world-class cultural institutions of the city, from the Metropolitan Museum of Art to the Museum of Modern Art, where masterpieces from around the globe await your admiration. Immerse yourself in the vibrant neighborhoods of Brooklyn, where eclectic street art, trendy boutiques, and mouthwatering cuisine define the local scene. Indulge your taste buds with the diverse flavors of New York's culinary landscape, from classic New York-style pizza to gourmet delicacies from around the world. Whether you're catching a Broadway show in Times Square, exploring the hipster haven of Williamsburg, or taking in the breathtaking views from the top of the Empire State Building, New York promises an unforgettable journey filled with excitement, culture, and endless inspiration. Come, experience the magic of the Big Apple and let New York City steal your heart."

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
        <BookingForm destination="New York"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
