import React from 'react';

const ImageComponent = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Destination ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageComponent;
