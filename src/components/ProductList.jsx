import ProductCard from './ProductCard';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="product-grid">
      {products.map(item => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
}