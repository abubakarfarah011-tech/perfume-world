import { useState, useEffect } from 'react'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Cart from './Components/Cart';
import './App.css' 

function App() {
// 1. GLOBAL STATE: Managing the "Memory" of the app
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  // #State for Filtering and Dark Mode
  const [filterCategory, setFilterCategory] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // to open cart sidebar
  const [searchTerm, setSearchTerm] = useState("");

// 2. FETCH DATA: Getting perfume data from the API (products.json)
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  // 3. LOGIC: The function that adds items to the shopping bag
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  // #Logic for Toggling Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // #Logic to handle Filter Change
  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

 const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

  const displayedProducts = products.filter(product => {
    const matchesCategory = filterCategory === "All" || product.category === filterCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
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
        onSearchChange={handleSearchChange}
      />
      {/* CART COMPONENT */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemove={removeFromCart}
      />

     {/* #Dev C: Gets the FILTERED perfume list*/}
    <ProductList products={displayedProducts} addToCart={addToCart} />

      {/* Dev D builds the footer here */}
      <Footer />
      <About/>
      
      {/* ID for the About Us link to scroll to */}
      <div id="about-section">
        <About/>
      </div>
    </div>
  );
}

export default App;