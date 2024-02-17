import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';

const Slideshow = () => {
  // Initiate state for the slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hardcoded array of images and captions
  const images = [
    {
      id: 1,
      url: '/slideshow/australia.webp',
      caption: 'A modern vacation.',
    },
    {
      id: 2,
      url: '/slideshow/brazil.webp',
      caption: 'Take in the fresh air and the relaxing atmosphere.',
    },
    {
      id: 3,
      url: '/slideshow/china.webp',
      caption: "The fun doesn't end even when the sun goes down.",
    },
    {
      id: 4,
      url: '/slideshow/cuba.webp',
      caption: 'A place for you to relax alone or with company.',
    },
    {
      id: 5,
      url: '/slideshow/egypt.webp',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
    {
      id: 6,
      url: '/slideshow/france.webp',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
    {
      id: 7,
      url: '/slideshow/germany.webp',
      caption: 'A modern vacation.',
    },
    {
      id: 8,
      url: '/slideshow/hawaii.webp',
      caption: 'Take in the fresh air and the relaxing atmosphere.',
    },
    {
      id: 9,
      url: '/slideshow/india.webp',
      caption: "The fun doesn't end even when the sun goes down.",
    },
    {
      id: 10,
      url: '/slideshow/indonesia.webp',
      caption: 'A place for you to relax alone or with company.',
    },
    {
      id: 11,
      url: '/slideshow/japan.webp',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
    {
      id: 12,
      url: '/slideshow/lapland.webp',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
    {
      id: 13,
      url: '/slideshow/mexico.webp',
      caption: 'A modern vacation.',
    },
    {
      id: 14,
      url: '/slideshow/morocco.webp',
      caption: 'Take in the fresh air and the relaxing atmosphere.',
    },
    {
      id: 15,
      url: '/slideshow/new_york.webp',
      caption: "The fun doesn't end even when the sun goes down.",
    },
    {
      id: 16,
      url: '/slideshow/new_zealand.webp',
      caption: 'A place for you to relax alone or with company.',
    },
    {
      id: 17,
      url: '/slideshow/nigeria.webp',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
    {
      id: 18,
      url: '/slideshow/peru.webp',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
    {
      id: 19,
      url: '/slideshow/phillipines.webp',
      caption: 'A modern vacation.',
    },
    {
      id: 20,
      url: '/slideshow/quebec.webp',
      caption: 'Take in the fresh air and the relaxing atmosphere.',
    },
    {
      id: 21,
      url: '/slideshow/san_francisco.webp',
      caption: "The fun doesn't end even when the sun goes down.",
    },
    {
      id: 22,
      url: '/slideshow/south_africa.webp',
      caption: 'A place for you to relax alone or with company.',
    },
    {
      id: 23,
      url: '/slideshow/thailand.webp',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
    {
      id: 24,
      url: '/slideshow/uk.webp',
      caption: 'Cut off contact from the world and focus on inner peace.',
    },
  ];

  // Control refresh rate for slideshow
  useEffect(() => {
    let slideshowInterval;

    slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3333);

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
            <button className={styles.control_large} onClick={prevImage}>🞀</button>
              {images.map((image, index) => (
                <button className={styles.control_small} key={image.id} onClick={() => selectImage(index)}>
                  {index + 1}
                </button>
              ))}
            <button className={styles.control_large} onClick={nextImage}>🞂</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
