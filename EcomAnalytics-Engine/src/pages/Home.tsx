import React from 'react';
import './Home.css';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const Home: React.FC = () => {
  // Sample Product Array
  const products: Product[] = [
    { id: 1, name: "Premium Wireless Headset", price: 79.99, category: "Electronics" },
    { id: 2, name: "Mechanical Gaming Keyboard", price: 124.50, category: "Accessories" },
    { id: 3, name: "Smart Fitness Tracker Watch", price: 45.00, category: "Wearables" },
    { id: 4, name: "Ergonomic Vertical Mouse", price: 32.00, category: "Accessories" },
    { id: 5, name: "UltraWide 2K Gaming Monitor", price: 299.99, category: "Electronics" },
    { id: 6, name: "Noise Cancelling Earbuds", price: 89.00, category: "Electronics" },
  ];

  return (
    <div className="homepage-bg-wrapper">
      <div className="homepage-content">
        <h1 className="section-title">Trending Products</h1>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              
              {/* Image Placeholder Frame */}
              <div className="image-placeholder">
                <span className="placeholder-icon">📦</span>
                <span className="placeholder-text">Product Image</span>
              </div>

              {/* Product Specifications */}
              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button className="view-product-btn">View Item</button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;