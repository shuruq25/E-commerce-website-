import React from 'react';
import './categories.css';
import Electronic from '../../assets/Electronics.jpg';
import clothing from '../../assets/colothing.jpg';
import Jewelry from '../../assets/Jewelry.jpg';
import makeup from '../../assets/makeup.jpg';


export default function Categories({ theme }) {
  return (
    <div className={`categories ${theme}`}>
      <h2>Shop by Category</h2>
      <ul className="category-list">
        <li className="category-card">
          <img src= {Electronic} alt="Electronics" />
          <h3>Electronics</h3>
          <button>Shop Now</button>
        </li>
        <li className="category-card">
          <img src={clothing} alt="Clothing" />
          <h3>Clothing</h3>
          <button>Shop Now</button>
        </li>
        <li className="category-card">
          <img src={Jewelry} alt="Jewelry" />
          <h3>Jewelry</h3>
          <button>Shop Now</button>
        </li>
        <li className="category-card">
          <img src={makeup} alt="Makeup" />
          <h3>Makeup</h3>
          <button>Shop Now</button>
        </li>
      </ul>
    </div>
  );
}





