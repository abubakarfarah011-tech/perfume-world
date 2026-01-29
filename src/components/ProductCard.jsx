export default function ProductCard({ item, addToCart }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} width="100" />
      <h3>{item.name}</h3>
      <p>KSh {item.price.toLocaleString()}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}