import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';
import initialImages from './initialImages.json'; // Import the JSON content

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    const startSlideShow = () => {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
      }, 5000); // Auto-transition every 5 seconds
    };

    const stopSlideShow = () => {
      clearInterval(intervalId);
    };

    startSlideShow();

    return () => {
      stopSlideShow();
    };
  }, [currentImageIndex]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? initialImages.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
  };

  return (
    <div className={styles.formatting_outer}>
      <div className={styles.image_container}>
        <div className={styles.image_wrapper}>
          <div key={initialImages[currentImageIndex].id} className={styles.image_slide}>
            <img
              src={initialImages[currentImageIndex].url}
              alt={initialImages[currentImageIndex].caption}
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.control}>
        <button className={styles.controls} onClick={handlePrevImage}>🞀</button>
        <button className={styles.controls} onClick={handleNextImage}>🞂</button>
      </div>
      <div className={styles.caption}>{initialImages[currentImageIndex].caption}</div>
    </div>
  );
};

export default Slideshow;
