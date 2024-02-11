import React, { useEffect } from 'react';
import StaffImage from '../assets/staff_picture.png';
import CustomHeader from '../components/global/CustomHeader';
import CustomFooter from '../components/global/CustomFooter';
import styles from './AboutUs.module.css'

function AboutUs() {
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <div>
      <CustomHeader />
        <div className={styles.about_body}>
          <div className={styles.about_container}>
            <div className={styles.marketing_blurb}>
              <h2>About HauskaNomad</h2>
              <p>
                HauskaNomad is your ultimate travel companion, offering a diverse range of curated experiences for adventurers and explorers alike. 
                We believe in the power of travel to inspire, connect, and transform lives. Whether you're seeking serene retreats in nature, 
                immersive cultural experiences, or adrenaline-pumping adventures, HauskaNomad has something for everyone.
              </p>
              <p>
                Our platform was created with a vision to make travel accessible, enjoyable, and meaningful for all. 
                We understand that each journey is unique, and we strive to provide personalized recommendations and exceptional service to every traveler.
              </p>
            </div>
            <div className={styles.staff_image_container}>
              <h2>Meet Our Team</h2>
              <img className={styles.staff_image} src={StaffImage} alt="Staff Image" />
            </div>
          </div>
        </div>
      <CustomFooter />
    </div>
  );
}

export default AboutUs;
