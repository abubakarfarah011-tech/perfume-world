import React, { useState } from 'react';
import './Header.css'; 

// --- SVG Icons ---
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const LogoIcon = () => (
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Diamond Cap */}
    <path d="M12 2L15 4L12 6L9 4L12 2Z" fill="currentColor" /> 
    <path d="M9 4L12 6M12 6L15 4" stroke="white" strokeWidth="0.5" /> {/* lines in cap */}
    {/* Neck of the bottle */}
    <rect x="10.5" y="6" width="3" height="2" fill="currentColor" />
    {/* Rectangular Bottle Body */}
    <rect x="6" y="8" width="12" height="13" rx="1" stroke="currentColor" strokeWidth="2" />
    {/* Line detail inside the bottle */}
    <line x1="8" y1="12" x2="16" y2="12" opacity="0.5" />
    <line x1="8" y1="15" x2="16" y2="15" opacity="0.3" />
  </svg>
);

/* MAIN HEADER COMPONENT*/
export default function Header({ 
  cartCount, 
  onFilterChange, 
  onSearchChange, 
  toggleDarkMode, 
  isDarkMode, 
  onOpenCart 
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    onFilterChange(category.toLowerCase());
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      
      {/* 1 the Logo Icon left side*/}
      <div className="header-left">
        <div className="logo-container">
          <LogoIcon />
        </div>
      </div>

      {/* 2. Center Business Name */}
      <div className="header-center">
        <h1 className="business-name">Perfume World</h1>
      </div>

      {/* 3. Right: Controls */}
      <div className="header-right">
        
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={(e) => onSearchChange(e.target.value)} 
        />

        {/* Dropdown Menu */}
        <div className="dropdown">
          <button className="dropbtn">
            {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} ▾
          </button>
          
          <div className="dropdown-content">
            <span onClick={() => handleFilterClick("all")}>All</span>
            <span onClick={() => handleFilterClick("men")}>Men</span>
            <span onClick={() => handleFilterClick("women")}>Women</span>
          </div>
        </div>

        {/* About Link */}
        <a href="#about-section" className="nav-link">About</a>

        {/* Cart Counter */}
        <div className="cart-container" onClick={onOpenCart}>
          <CartIcon />
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>

        {/* Dark Mode toggle */}
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input 
              type="checkbox" 
              id="checkbox" 
              onChange={toggleDarkMode} 
              checked={isDarkMode}
            />
            <div className="slider round"></div>
          </label>
          <span style={{ fontSize: '1.2rem' }}>{isDarkMode ? '🌙' : '☀️'}</span>
        </div>

      </div>
    </header>
  );
}