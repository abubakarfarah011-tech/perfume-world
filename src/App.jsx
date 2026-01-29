import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {
  // 1. GLOBAL STATE: Managing the "Memory" of the app
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // 2. FETCH DATA: Getting perfume data from the API (products.json)
  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  // 3. LOGIC: The function that adds items to the shopping bag
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // 4. ARCHITECTURE: Passing the data/logic to the other Developers
  return (
    <div className="app-container">
      {/* Dev B gets the cart number */}
      <Header cartCount={cart.length} />

      {/* Dev C gets the perfume list and the 'Add' function */}
      <ProductList perfumes={products} onAdd={addToCart} />

      {/* Dev D builds the footer here */}
      <Footer />
    </div>
  )
}

export default App;