import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let slideshowInterval;

    slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval (in milliseconds) as needed

    return () => clearInterval(slideshowInterval);
  }, [currentImageIndex, images]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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
