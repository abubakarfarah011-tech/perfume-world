// src/App.js
import { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer/Footer';
// import About from './Components/About/About';
import Header from './Components/Header';

function App() {
  // 1. GLOBAL STATE: Managing the "Memory" of the app
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // New: State for filtering (Men/Women) and searching
  const [filter, setFilter] = useState('all'); // 'all', 'men', 'women'
  const [searchTerm, setSearchTerm] = useState(''); // String for search by name

  // 2. FETCH DATA: Getting perfume data from the API (products.json)
  useEffect(() => {
  fetch('products.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('Fetched data:', data);  // Debug
      if (Array.isArray(data.perfumes)) {
        setProducts(data.perfumes );
      } else {
        console.error('Data is not an array:', data);
      }
    })
    .catch((err) => console.log("Fetch error:", err));
}, []);

  // 3. LOGIC: The function that adds items to the shopping bag
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // New: Filter and search logic
  // First, filter by category (Men/Women), then by search term (name)
  const filteredPerfumes = products
    .filter(perfume => filter === 'all' || perfume.category === filter) // Category filter
    .filter(perfume => perfume.name.toLowerCase().includes(searchTerm.toLowerCase())); // Search filter

  // 4. ARCHITECTURE: Passing the data/logic to the other Developers
  return (
    <div className="app-container">
      {/* Dev B gets the cart number, and now setFilter/setSearchTerm for controls */}
      <Header 
        cartCount={cart.length} 
        setFilter={setFilter} 
        setSearchTerm={setSearchTerm} 
      />

      {/* Dev C gets the filtered perfume list and the 'Add' function */}
      <ProductList perfumes={filteredPerfumes} onAdd={addToCart} />

      {/* Dev D builds the footer here */}
      <Footer />
      {/* <About /> */}
    </div>
  );
}

export default App;