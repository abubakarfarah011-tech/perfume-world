// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard

const ProductList = ({ perfumes, onAdd }) => {
  // perfumes: filtered array of perfume objects (passed via props from App.js)
  // onAdd: function to add to cart (passed via props, renamed for clarity)
  return (
    <div className="product-grid">
      {perfumes.length > 0 ? (
        perfumes.map(perfume => (
          <ProductCard 
            key={perfume.id} // Unique key for React's list rendering
            perfume={perfume} // Pass perfume data
            addToCart={onAdd} // Pass addToCart function
          />
        ))
      ) : (
        <p>No perfumes match your search or filter.</p> // Conditional rendering for empty results
      )}
    </div>
  );
};

export default ProductList;