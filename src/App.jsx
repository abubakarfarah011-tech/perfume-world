// src/App.js
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Ensure BrowserRouter is imported
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import './App.css';

// Home component for the main page
function Home({ products, cart, addToCart, filterCategory, handleFilterChange, onSearchChange, isDarkMode, toggleDarkMode, isCartOpen, setIsCartOpen }) {
  const displayedProducts = filterCategory === "All" 
    ? products 
    : products.filter(product => product.category === filterCategory);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header 
        cartCount={cart.length} 
        onFilterChange={handleFilterChange}
        onSearchChange={onSearchChange}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        onOpenCart={() => setIsCartOpen(!isCartOpen)}
      />
      <ProductList perfumes={displayedProducts} onAdd={addToCart} />
      <Footer />
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");  // Add search state
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        if (Array.isArray(data.perfumes)) {
          setProducts(data.perfumes);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <BrowserRouter>  
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              products={products} 
              cart={cart} 
              addToCart={addToCart} 
              filterCategory={filterCategory} 
              handleFilterChange={handleFilterChange} 
              onSearchChange={handleSearchChange}
              isDarkMode={isDarkMode} 
              toggleDarkMode={toggleDarkMode} 
              isCartOpen={isCartOpen} 
              setIsCartOpen={setIsCartOpen} 
            />
          } 
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;