import React, { useState } from 'react';
import SearchBar from './SearchBar'
import styles from './Slideshow.module.css';
import initialImages from './initialImages.json'; // Import the JSON file

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
      <div className={styles.overlay} />
    </div>
  );
};

export default Slideshow;
