import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo_light from "../../assets/logo-b.png";
import logo_dark from "../../assets/logo-w.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toogle_light from "../../assets/night.png";
import toogle_dark from "../../assets/day.png";
import cart_icon_light from "../../assets/cart-light.png";
import cart_icon_dark from "../../assets/cart-dark.png";
import wishlist_icon_light from "../../assets/wishlist-light.png";
import wishlist_icon_dark from "../../assets/wishlist-dark.png";
import signin_icon_light from "../../assets/signin-light.png";
import signin_icon_dark from "../../assets/signin-dark.png";

export default function Navbar({ theme, setTheme, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={`navbar ${theme}`}>
      {/* Logo */}
      <img
        src={theme === "light" ? logo_light : logo_dark}
        className="logo"
        alt="Logo"
      />

      {/* Menu Toggle for Mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-item">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="nav-item">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="nav-item">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="Search"
          className="search-icon"
        />
      </div>

      {/* Navbar Icons */}
      <div className="nav-icons">
        {/* Cart Icon with Count */}
        <Link to="/cart" className="cart-icon-container">
          <img
            className="cart-icon"
            src={theme === "light" ? cart_icon_light : cart_icon_dark}
            alt="Cart"
          />
          {cartCount > 0 && (
            <div className="cart-badge">{cartCount}</div>
          )}
        </Link>

        {/* Wishlist Icon */}
        <img
          className="icon"
          src={theme === "light" ? wishlist_icon_light : wishlist_icon_dark}
          alt="Wishlist"
        />

        {/* Sign-In Dropdown */}
        <div className="signin-dropdown">
          <img
            className="icon"
            src={theme === "light" ? signin_icon_light : signin_icon_dark}
            alt="Sign In"
            onClick={toggleDropdown} 
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>

      {/* Theme Toggle */}
      <img
        onClick={toggleTheme}
        src={theme === "light" ? toogle_light : toogle_dark}
        alt="Toggle Theme"
        className="toggle-icon"
      />
    </div>
  );
}
