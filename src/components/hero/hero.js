import React from 'react';
import './hero.css';
import image from '../../assets/background.jpg'; 

export default function Hero({ theme }) {
  return (
    <div className={`hero ${theme}`}>
      <div className="hero-content">
        <div className="text-container">
          <div className="section-title">
            <p className="line"></p>
            <p className="title-text">FRESHLY BREWED HAPPINESS</p>
          </div>
          <h1 className="main-heading"> Good Mood </h1>
          <div className="shop-now">
            <p className="shop-text">SHOP NOW</p>
            <p className="line"></p>
          </div>
        </div>
      </div>
      <img className='hero-image' src={image} alt='Background' />
    </div>
  );
}




