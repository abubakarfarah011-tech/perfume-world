// src/Components/Header/Header.js
import React from 'react';

const Header = ({ cartCount, setFilter, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header style={{ 
      padding: '10px', 
      backgroundColor: '#f0f0f0', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid #ccc'
    }}>
      <h1 style={{ margin: 0 }}>Perfume World</h1>
      
      <div>
        <button onClick={() => setFilter('all')} style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer' }}>All</button>
        <button onClick={() => setFilter('men')} style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer' }}>Men</button>
        <button onClick={() => setFilter('women')} style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer' }}>Women</button>
      </div>
      
      <input 
        type="text" 
        placeholder="Search perfumes..." 
        onChange={handleSearch} 
        style={{ padding: '5px', margin: '0 10px', width: '200px' }}
      />
      
      <div style={{ fontWeight: 'bold' }}>Cart: {cartCount}</div>
    </header>
  );
};

export default Header;