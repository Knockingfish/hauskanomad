import React, { useState } from 'react';
import SearchBar from './SearchBar'
import styles from './Slideshow.module.css';

const Slideshow = () => {
  const [nextImageIndex, setNextImageIndex] = useState(1); // Initialize with the index of the second image
  const [isSearchBarHovered, setIsSearchBarHovered] = useState(false);
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

  const handleSearchBarHover = (isHovered) => {
    setIsSearchBarHovered(isHovered);
  };

  const handleSearchBarFocus = (isFocused) => {
    setIsSearchBarFocused(isFocused);
  };

  // Hardcoded array of images and captions
  const initialImages = [
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

  return (
    <div className={styles.formatting_outer}>
      <div className={styles.image_container}>
        <div className={styles.image_wrapper}>
          {/* Render the current and next images */}
          {initialImages.map((image, index) => (
            <div key={image.id} className={styles.image_slide}>
              <img
                src={image.url}
                alt={image.caption}
                className={`${styles.image} ${index === nextImageIndex ? styles.next : ''} ${isSearchBarHovered || isSearchBarFocused ? styles.blurred : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div 
        className={styles.search}
        onMouseEnter={() => handleSearchBarHover(true)}
        onMouseLeave={() => handleSearchBarHover(false)}
        onFocus={() => handleSearchBarFocus(true)}
        onBlur={() => handleSearchBarFocus(false)}
      >
        <SearchBar/>
      </div>
      <div className={styles.overlay} />
    </div>
  );
};

export default Slideshow;
