
import React from 'react';

const ReviewComments = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews and Comments</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>{review.comment}</p>
          <p>Score: {review.score}</p>
          <p>Username: {review.username}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewComments;
