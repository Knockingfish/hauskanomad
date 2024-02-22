import React, { useEffect, useState } from 'react';
import styles from './Rule.module.css';

const Rule = () => {
  const [widthInRem, setWidthInRem] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const widthInRem = windowWidth / htmlFontSize;
      setWidthInRem(widthInRem);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.rule}>
      Width: {widthInRem}rem
    </div>
  );
};

export default Rule;
