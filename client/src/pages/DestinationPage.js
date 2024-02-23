import React, { useState, useEffect } from 'react';
import CustomHeader from './global/CustomHeader'
import ImageComponent from './destinationpage/ImageComponent'; 
import DescriptionComponent from './destinationpage/DescriptionComponent'; 
import BookingInfo from './destinationpage/BookingInfo'; 
import BookingForm from './destinationpage/BookingForm'; 
import ReviewComments from './destinationpage/ReviewComments';
import CustomFooter from './global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  
  return (
    <div>
      <div className={styles.end_container}>
        <CustomHeader />
      </div>
      <div className={styles.top}>
      <ImageComponent />
      <DescriptionComponent/>
      </div>
      <div className={styles.middle}>
      <BookingForm/>
      <BookingInfo/>
      </div>
       
      <div className={styles.bottom}>
      <ReviewComments/>
      </div>
      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;
