import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo_light from "../../assets/logo-b.png";
import logo_dark from "../../assets/logo-w.png";

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


        {/* Sign-In Dropdown */}
        <div className="nav-icons">
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

      {/* Theme Toggle */}
      
      {/* Navbar Icons */}
        <div class="relative inline-flex">
          <Link to="/cart" className="cart-icon-container">
            <img
              className="cart-icon"
              src={theme === "light" ? cart_icon_light : cart_icon_dark}
              alt="Cart"
            />
          </Link>
          <path
            fill-rule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
            clip-rule="evenodd"
          ></path>
          <span class="absolute top-0.5 right-0.5 grid min-h-[18px] min-w-[18px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-orange-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']">
            o
          </span>
        </div>

        <div class="relative inline-flex">
          <NavLink to="/wishlist" aria-label="View Wishlist">
            <img
              className="icon"
              src={theme === "light" ? wishlist_icon_light : wishlist_icon_dark}
              alt="Wishlist"
            />
          </NavLink>
          <path
            fill-rule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
            clip-rule="evenodd"
          ></path>
          <span class="absolute top-0.5 right-0.5 grid min-h-[18px] min-w-[18px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-orange-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']">
            o
          </span>
        </div>

      <img
        onClick={toggleTheme}
        src={theme === "light" ? toogle_light : toogle_dark}
        alt="Toggle Theme"
        className="toggle-icon"
      />


    </div>
    </div>
  );
}
