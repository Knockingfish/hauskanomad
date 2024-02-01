// W
import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    // Add more placeholder images as needed
  ];

  useEffect(() => {
    let slideshowInterval;

    slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

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
