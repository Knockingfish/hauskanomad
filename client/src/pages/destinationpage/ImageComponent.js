import React, { useState } from 'react';
import styles from './ImageComponent.module.css';

const ImageComponent = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.images}>
     
        <img
        className={styles.img}
          src='/destination/australia.webp'
          alt='something'
          
          style={{ cursor: 'pointer' }}
        />
    
      {selectedImage !== null && (
        <Modal image={images[selectedImage]} closeModal={closeModal} />
      )}
    </div>
  );
};

const Modal = ({ image, closeModal }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={closeModal}
    >
      <img
        src={image}
        alt="Expanded"
        style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageComponent;
