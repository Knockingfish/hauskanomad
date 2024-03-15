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
    <div className={styles.image_container} onClick={openModal}>
      <img
        className={styles.img}
        src={image}
        alt='destination'
      />
      {isOpen && <Modal image={image} closeModal={closeModal} />}
      <div className={styles.overlay} />
    </div>
  );
};

const Modal = ({ image, closeModal }) => {
  const handleClick = () => {
    closeModal();
  };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img
          src={image}
          alt="Expanded"
          className={styles.modalImage}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ImageComponent;
