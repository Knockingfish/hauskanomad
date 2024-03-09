import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';
import jsonimg from './initialImages.json';
import { useDarkMode } from '../../global/DarkModeContext';

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = jsonimg;
  const { darkMode } = useDarkMode();

  // Controls slidehow refreshing + refresh rate.
  useEffect(() => {
    let slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(slideshowInterval);
  }, [currentImageIndex, images.length]);

  // Get next image in array and display it (set to current image).
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Show the last image in the array, for the slide effect to work as intended.
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.formatting_outer}>
      <div className={styles.image_container}>
        <div className={styles.parallax}>
          {images.map((image, index) => {
            const isActive = currentImageIndex === index || currentImageIndex === (index + 1) % images.length;
            const isNext = currentImageIndex === index;
            return (
              <img
                key={index}
                className={`${styles.image} ${isActive ? styles.visible : styles.hidden} ${isNext ? styles.next : ''}`}
                src={image.url}
                alt={image.alt}
              />
            );
          })}
        <div className={styles.caption}>{images[currentImageIndex].caption}</div>
      </div>
      </div>
      <div className={styles.control_container}>
        <button className={styles.controls} onClick={prevImage}>
          <img
            className={styles.slide_icon}
            src={darkMode ? '/left_dark.png' : '/left_light.png'}
          />
        </button>
        <button className={styles.controls} onClick={nextImage}>
          <img
            className={styles.slide_icon}
            src={darkMode ? '/right_dark.png' : '/right_light.png'}
          />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
