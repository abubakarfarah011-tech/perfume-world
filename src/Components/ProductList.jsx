import React from 'react';
import ProductCard from './ProductCard'; 

//#Renamed props to match App.jsx.used products and addtocart
const ProductList = ({ products, addToCart }) => {
  
  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map(perfume => (
          <ProductCard 
            key={perfume.id} // Unique key for React's list rendering
            perfume={perfume} // Pass perfume data
            //#passed addtoCart Function
            addToCart={addToCart} 
          />
        ))
      ) : (
        <p>No perfumes match your search or filter.</p> // Conditional rendering for empty results
      )}
    </div>
  );
};

export default ProductList;