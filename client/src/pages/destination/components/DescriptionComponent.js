import React from 'react';
import styles from './DescriptionComponent.module.css';

const DescriptionComponent = ({ content }) => {
  return (
    <div className={styles.description_container}>
      <div className={styles.content_container}>
        <div className={styles.description_header}>Description</div>
        <p className={styles.description_content}>{content}</p>
      </div>
    </div>
  );
};

export default DescriptionComponent;
