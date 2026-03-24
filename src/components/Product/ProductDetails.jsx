import React from 'react';
import StarRating from './StarRating';

const ProductDetails = ({ name, description, price, imageUrl, rating }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
      <img src={imageUrl} alt={name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '12px' }} />
      <div>
        <h2 style={{ margin: '0 0 8px 0', color: '#111827' }}>{name}</h2>
        <StarRating rating={rating} />
        <p style={{ color: '#4b5563', margin: '0 0 16px 0', lineHeight: '1.5' }}>{description}</p>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>{price} ₴</div>
      </div>
    </div>
  );
};

export default ProductDetails;
