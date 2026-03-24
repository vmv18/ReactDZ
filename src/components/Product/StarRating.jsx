import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div style={{ color: '#fbbf24', fontSize: '20px', marginBottom: '8px' }}>
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </div>
  );
};

export default StarRating;
