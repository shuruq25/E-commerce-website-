import React from 'react';
import './hero.css';
import image from '../../assets/background.jpg'; 
import { Link } from 'react-router-dom'; 

export default function Hero({ theme }) {
  return (
    <div className={`hero ${theme}`}>
      <div className="hero-content">
        <div className="text-container">
          <div className="section-title">
            <p className="line"></p>
            <p className="title-text">FRESHLY BREWED HAPPINESS</p>
          </div>
          <h1 className="main-heading">Good Mood</h1>
          <div className="shop-now">
            <Link to="/products">
              <p className="shop-text">SHOP NOW</p>
              </Link>
              <p className="line"></p>
          </div>
        </div>
      </div>
      <img className='hero-image' src={image} alt='Background of coffee and happiness' />
    </div>
  );
}



