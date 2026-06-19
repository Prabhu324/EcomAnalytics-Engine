import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="app-navbar">
      {/* Left: Logo linking back to Homepage */}
      <div className="navbar-left">
        <Link to="/" className="logo-brand">SHOPZONE</Link>
      </div>

      {/* Center: Huge Search Bar */}
      <form className="navbar-center-search" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search for items, brands, and more..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-submit-btn">🔍</button>
      </form>

      {/* Right: Actions (Login & Cart) */}
      <div className="navbar-right">
        <Link to="/login" className="navbar-login-btn">
          Log In
        </Link>
        
        {/* New Cart Button Link */}
        <Link to="/cart" className="navbar-cart-btn" title="View Cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">0</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;