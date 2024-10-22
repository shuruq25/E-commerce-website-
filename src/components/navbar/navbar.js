import React, { useState } from 'react';
import './navbar.css';
import logo_light from '../../assets/logo-b.png';
import logo_dark from '../../assets/logo-w.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toogle_light from '../../assets/night.png';
import toogle_dark from '../../assets/day.png';
import cart_icon_light from '../../assets/cart-light.png';
import cart_icon_dark from '../../assets/cart-dark.png';
import wishlist_icon_light from '../../assets/wishlist-light.png';
import wishlist_icon_dark from '../../assets/wishlist-dark.png';
import signin_icon_light from '../../assets/signin-light.png';
import signin_icon_dark from '../../assets/signin-dark.png';

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    newArrivals: false,
    sales: false,
    electronics: false,
  });

  const toggle_mood = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const toggleDropdown = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      
    <div className={`navbar ${menuOpen ? 'mobile-open' : ''}`}>
      <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className='logo' />

      <div className='menu-toggle' onClick={toggleMenu}>
        <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <a href="/" className="nav-link"><i className="fa fa-home"></i> Home</a>
        </li>

        <li className="nav-item">
          <a href="/products" className="nav-link"><i className="fa fa-cogs"></i> Products</a>
        </li>

        <li className="nav-item dropdown">
          <a
            href="newArrivals"
            className="nav-link dropdown-toggle"
            onClick={() => toggleDropdown('newArrivals')}
          >
            <i className="fa fa-star"></i> New Arrivals
          </a>
          {dropdowns.newArrivals && (
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/new-arrivals/men">Men</a></li>
              <li><a className="dropdown-item" href="/new-arrivals/women">Women</a></li>
              <li><a className="dropdown-item" href="/new-arrivals/makeup">Makeup</a></li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <a
            href="sales"
            className="nav-link dropdown-toggle"
            onClick={() => toggleDropdown('sales')}
          >
            <i className="fa fa-tags"></i> Sales
          </a>
          {dropdowns.sales && (
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/sales/men">Men</a></li>
              <li><a className="dropdown-item" href="/sales/women">Women</a></li>
              <li><a className="dropdown-item" href="/sales/accessories">Jewelry</a></li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <a
            href="electronics"
            className="nav-link dropdown-toggle"
            onClick={() => toggleDropdown('electronics')}
          >
            <i className="fa fa-laptop"></i> Electronics
          </a>
          {dropdowns.electronics && (
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/electronics/laptops">Laptops</a></li>
              <li><a className="dropdown-item" href="/electronics/mobiles">Mobile Phones</a></li>
              <li><a className="dropdown-item" href="/electronics/headphones">Headphones</a></li>
              <li><a className="dropdown-item" href="/electronics/accessories">Accessories</a></li>
            </ul>
          )}
        </li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="Search" />
      </div>

      <div className="nav-icons">
        <img
          className={`icon ${theme === 'light' ? 'icon-light' : 'icon-dark'}`}
          src={theme === 'light' ? cart_icon_light : cart_icon_dark}
          alt="Cart Icon"
        />
        <img
          className={`icon ${theme === 'light' ? 'icon-light' : 'icon-dark'}`}
          src={theme === 'light' ? wishlist_icon_light : wishlist_icon_dark}
          alt="Wishlist Icon"
        />
        <img
          className={`icon ${theme === 'light' ? 'icon-light' : 'icon-dark'}`}
          src={theme === 'light' ? signin_icon_light : signin_icon_dark}
          alt="Sign In Icon"
        />
      </div>

      <img onClick={toggle_mood} src={theme === 'light' ? toogle_light : toogle_dark} alt="Toggle" className='toggle-icon' />
    </div>
  );
}




