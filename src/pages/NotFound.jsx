import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '72px', color: '#f97316', margin: '0 0 20px 0' }}>404</h1>
      <h2 style={{ fontSize: '24px', color: '#1f2937', marginBottom: '16px' }}>Сторінку не знайдено</h2>
      <p style={{ color: '#6b7280', marginBottom: '32px' }}>
        Схоже, такої сторінки не існує або її було переміщено.
      </p>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: '500'
        }}
      >
        Повернутися на Головну
      </Link>
    </div>
  );
};

export default NotFound;
