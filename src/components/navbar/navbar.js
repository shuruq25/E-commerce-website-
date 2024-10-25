import React, { useState, useCallback } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo_light from "../../assets/logo-b.png";
import logo_dark from "../../assets/logo-w.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import cart_icon_light from "../../assets/cart-light.png";
import cart_icon_dark from "../../assets/cart-dark.png";
import wishlist_icon_light from "../../assets/wishlist-light.png";
import wishlist_icon_dark from "../../assets/wishlist-dark.png";
import signin_icon_light from "../../assets/signin-light.png";
import signin_icon_dark from "../../assets/signin-dark.png";

const Icon = ({ src, alt, onClick }) => (
  <img className="icon" src={src} alt={alt} onClick={onClick} />
);

export default function Navbar({ theme, setTheme, wishList ,cart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, [setTheme]);

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  const wishListArrayLength = wishList.length;
  const cartArrayLength=cart.length;

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
        <NavLink to="/products" className="nav-item">
          <p>PRODUCTS</p>
        </NavLink>
        <NavLink to="/about" className="nav-item">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          <p>CONTACT</p>
        </NavLink>
      </ul>
          
      
      {/* Sign-In Dropdown and Icons */}
      <div className="nav-icons">
        <div className="signin-dropdown">
          <Icon
            src={theme === "light" ? signin_icon_light : signin_icon_dark}
            alt="Sign In"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="cart-icon-container">
          <Icon
            src={theme === "light" ? cart_icon_light : cart_icon_dark}
            alt="Cart"
          />          
          </Link>
          <div className="cart-badge inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cartArrayLength}
          </div>

        {/* Wishlist Icon */}
        <NavLink to="/wishlist" aria-label="View Wishlist">
          <Icon
            src={theme === "light" ? wishlist_icon_light : wishlist_icon_dark}
            alt="Wishlist"
          />
        </NavLink>
        
        {/* Wishlist Badge */}
        <div className="wishlist-badge inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          {wishListArrayLength}
        </div>

        {/* Theme Toggle Icon */}
        <Icon
          src={theme === "light" ? toggle_light : toggle_dark}
          alt="Toggle Theme"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}
