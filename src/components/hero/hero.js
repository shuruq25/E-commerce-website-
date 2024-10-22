import React from 'react';
import './hero.css';

export default function Hero({ theme }) {
  return (
    <div className={`hero ${theme}`}>
      <div className={`box ${theme}`}>
        <div className="hero-content">
          <h1>Welcome to Our Store</h1>
          <p>Browse the best products available online</p>
          <button className={`cta-btn ${theme}`}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}




