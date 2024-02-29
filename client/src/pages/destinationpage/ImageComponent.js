import React, { useState } from 'react';
import styles from './ImageComponent.module.css';

const ImageComponent = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.image_container}>
      <img
        className={styles.img}
        onClick={openModal}
        src={image}
        alt='destination'
      />
      <div className={styles.overlay} />
    </div>
  );
};

const Modal = ({ image, closeModal }) => {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent}>
        <img
          src={image}
          alt="Expanded"
          className={styles.modalImage}
        />
      </div>
    </div>
  );
};

export default ImageComponent;
