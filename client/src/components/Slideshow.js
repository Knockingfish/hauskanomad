// W
import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  // Create state for position in slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let slideshowInterval;

    slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Timer for switching slideshow image

    return () => clearInterval(slideshowInterval);
  }, [currentImageIndex, images]);

  // Move slideshow forwards
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move slideshow backwards
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Directly select slideshow position
  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slideshow">
      <img src={images[currentImageIndex].url} alt={`Slide ${currentImageIndex + 1}`} />
      <p>{images[currentImageIndex].caption}</p>

      <div className="controls">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>

      <div className="thumbnails">
        {images.map((image, index) => (
          <button key={image.id} onClick={() => selectImage(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
