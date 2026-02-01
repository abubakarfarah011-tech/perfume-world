import { useState, useEffect } from 'react'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import Footer from "./Components/Footer/Footer";
import About from './Components/About/About'
import './App.css' 

function App() {
// 1. GLOBAL STATE: Managing the "Memory" of the app
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  // #State for Filtering and Dark Mode
  const [filterCategory, setFilterCategory] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // to open cart sidebar

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

  // #Logic for Toggling Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // #Logic to handle Filter Change
  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  // #Logic to filter the products before sending them to ProductList
  const displayedProducts = filterCategory === "All" 
    ? products 
    : products.filter(product => product.category === filterCategory); 

  return (
    //#add the darkmode class to the main container based on state
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      
      {/* #pass all the control functions to Header */}
      <Header 
        cartCount={cart.length} 
        onFilterChange={handleFilterChange}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        onOpenCart={() => setIsCartOpen(!isCartOpen)} //simulating openingcart
      />

      {/* #Dev C: Gets the FILTERED perfume list*/}
      <ProductList perfumes={displayedProducts} onAdd={addToCart} />

      {/* Dev D builds the footer here */}
      <Footer />
      
      {/* ID for the About Us link to scroll to */}
      <div id="about-section">
        <About/>
      </div>
    </div>
  );
}

export default App;