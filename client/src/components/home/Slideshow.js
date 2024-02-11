import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';

const Slideshow = () => {
  // Initiate state for the slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hardcoded array of images and captions
  const images = [
    {
      id: 1,
      url: '/slideshow/photo1.png',
      caption: 'A modern vacation.',
    },
    {
      id: 2,
      url: '/slideshow/photo2.png',
      caption: 'Take in the fresh air and the relaxing atmosphere.',
    },
    {
      id: 3,
      url: '/slideshow/photo3.png',
      caption: "The fun doesn't end even when the sun goes down.",
    },
    {
      id: 4,
      url: '/slideshow/photo4.png',
      caption: 'A place for you to relax alone or with company.',
    },
    {
      id: 5,
      url: '/slideshow/photo5.png',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
  ];

  // Control refresh rate for slideshow
  useEffect(() => {
    let slideshowInterval;

    slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6666);

    return () => clearInterval(slideshowInterval);
  }, [currentImageIndex, images]);

  // Enable moving forwards in the slideshow index manually
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Enable moving backwards in the slideshow index manually
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handles manual selection of a position in the index.
  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Inline style for the parallax effect
  const inlineStyle = {
    backgroundImage: `url(${images[currentImageIndex].url})`,
    minHeight: '80vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className={styles.formatting_outer}>
      <div className={styles.image_container} style={inlineStyle}>
        <div className={styles.formatting_inner}>
          <div className={styles.caption}>{images[currentImageIndex].caption}</div>
          <div className={styles.controls}>
            <button className={styles.control_large} onClick={prevImage}>❮</button>
              {images.map((image, index) => (
                <button className={styles.control_small} key={image.id} onClick={() => selectImage(index)}>
                  {index + 1}
                </button>
              ))}
            <button className={styles.control_large} onClick={nextImage}>❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
