import React from 'react';
import './footer.css'; 

export default function Footer({ theme }) {
  return (
    <footer>
      <div className={`footer ${theme}`}>
        <div className="footer-links">
          <a href="About">About Us</a>
          <a href="Contact">Contact Us</a>
          <a href="Privacy">Privacy Policy</a>
          <a href="Terms & Conditions">Terms & Conditions</a>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
        <p>&copy; 2024 Good Mood. All rights reserved.</p>
      </div>
    </footer>
  );
};
