import './wishlist.css';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from "react";

const WishList = ({ wishList = [], setWishList, theme, cart = [], setCart }) => {
  const containerClass = theme === 'light' ? 'wishlist-container-light' : 'wishlist-container-dark';
  const titleClass = theme === 'light' ? 'wishlist-title-light' : 'wishlist-title-dark';
  const textClass = theme === 'light' ? 'text-gray-800' : 'text-gray-200';
  const [open, setOpen] = useState(false);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    handleDelete(product.id);
    setOpen(true); 
  };

  const handleDelete = (id) => {
    setWishList(wishList.filter(item => item.id !== id));
  };

  const handleClose = (event, reason) => {
    console.log("Snackbar close:", reason);
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  if (wishList.length === 0) {
    return (
      <div className={containerClass}>
        <p className={titleClass}>The wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <h1>WISHLIST</h1>
      <p className={`text-2xl tracking-tight leading-6 ${textClass}`}>{wishList.length} items</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {wishList.map((item) => (
          <div key={item.id} className="wishlist-card inset-x-0 top-0 p-4 border rounded-lg shadow-lg">
            <button 
              aria-label="delete" 
              onClick={() => handleDelete(item.id)} 
              className="wishlist-button"
            >
              <svg className="fil-current w-4 h-4" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 1L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <img 
              src={item.image_url} 
              alt={item.name} 
              onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder.jpg'; }} 
              className="wishlist-image w-full h-48 object-cover rounded"
            />
            <h3 className={`wishlist-item-name ${textClass} mt-4`}>{item.name}</h3>
            <p className={`wishlist-item-price ${textClass}`}>${item.price}</p>
            <div className="mt-4 flex space-x-2">
              <Link to={`/products/${item.id}`} className="wishlist-button">More info</Link>
              <button 
                onClick={() => addToCart(item)} 
                className="wishlist-button"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Snackbar 
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Item added to cart!"
      />
    </div>
  );
};

export default WishList;
