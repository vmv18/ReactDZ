import React from 'react';
import Button from '../atoms/Button/Button';

const ProductActions = ({ quantity, onIncrement, onDecrement, onBuy }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#f9fafb', padding: '16px', borderRadius: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '4px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <button onClick={onDecrement} disabled={quantity <= 1} style={{ border: 'none', background: 'transparent', width: '32px', height: '32px', cursor: 'pointer', fontSize: '18px' }}>-</button>
        <span style={{ fontWeight: '500', width: '20px', textAlign: 'center' }}>{quantity}</span>
        <button onClick={onIncrement} style={{ border: 'none', background: 'transparent', width: '32px', height: '32px', cursor: 'pointer', fontSize: '18px' }}>+</button>
      </div>
      <Button onClick={onBuy} style={{ flex: 1 }}>Купити зараз</Button>
    </div>
  );
};

export default ProductActions;
