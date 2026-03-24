import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import ProductActions from './ProductActions';

const ProductContainer = () => {
  const [quantity, setQuantity] = useState(1);
  
  // Мок-дані товару (локальний стан контейнера)
  const productInfo = {
    name: 'Бездротові навушники Sony',
    description: 'Навушники преміум-класу з найкращим на ринку шумозаглушенням, до 30 годин роботи від батареї та чудовим звуком.',
    price: 14999,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  };

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));
  
  const handleBuy = () => {
    alert(`Додано до кошика: ${productInfo.name} (${quantity} шт.) на суму ${productInfo.price * quantity} ₴`);
  };

  return (
    <div style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h2 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '12px', marginBottom: '24px', color: '#1f2937' }}>
        Картка товару (Product Container)
      </h2>
      
      {/* Передача даних згори донизу через props */}
      <ProductDetails 
        name={productInfo.name}
        description={productInfo.description}
        price={productInfo.price}
        rating={productInfo.rating}
        imageUrl={productInfo.imageUrl}
      />
      
      <ProductActions 
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onBuy={handleBuy}
      />
    </div>
  );
};

export default ProductContainer;
