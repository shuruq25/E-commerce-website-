import React from 'react';
import './promotions.css'; // CSS for styling

export default function Promotions({ theme }) {
  return (
    <div className={`promotions ${theme}`}>
      <h2>Special Offers</h2>
      <div className="promotion-cards">
        <div className="promotion-card">
          <div className="promotion-content">
            <h3>Summer Sale</h3>
            <p>Up to 50% off on selected items!</p>
            <button className={`cta-btn ${theme}`} aria-label="Shop now for Summer Sale">Shop Now</button>
          </div>
        </div>
        <div className="promotion-card">
          <div className="promotion-content">
            <h3>New Arrivals</h3>
            <p>Check out the latest additions to our store.</p>
            <button className={`cta-btn ${theme}`} aria-label="Explore new arrivals">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
