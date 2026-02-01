// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ perfume, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(perfume);
  };

  return (
    <div className="product-card">
      <img src={perfume.image} alt={perfume.name} className="product-image" />
      <h3>{perfume.name}</h3>
      <p>Ksh {perfume.price}</p>
      <button 
        onClick={handleAddToCart} 
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;