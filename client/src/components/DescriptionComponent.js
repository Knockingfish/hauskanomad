import React from 'react';

const DescriptionComponent = ({ description, marketingContent }) => {
  return (
    <div>
      <h2>Description</h2>
      <p>{description}</p>
      <h2>Marketing</h2>
      <p>{marketingContent}</p>
    </div>
  );
};

export default DescriptionComponent;
