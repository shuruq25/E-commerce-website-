import React from 'react';
import './footer.css';

export default function Footer({ theme }) {
  return (
    <div className={`footer ${theme}`}>
      <div>
        <p>COMPANY</p>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#delivery">Delivery</a></li>
          <li><a href="#policy">Privacy policy</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Get In Touch</h3>
        <ul>
          <li>+998-568-935-7754</li>
          <li>contact@GoodModd.com</li>
        </ul>
      </div>
      <div className='footer-social'>
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Good Mood. All rights reserved.</p>
      </div>
    </div>
  );
}
