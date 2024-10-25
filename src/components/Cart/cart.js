import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import './cart.css';

const Cart = ({ theme, cart = [], setCart=[] }) => {
  const containerClass = theme === 'light' ? 'cart-container-light' : 'cart-container-dark';
  const titleClass = theme === 'light' ? 'cart-title-light' : 'cart-title-dark';
  const textClass = theme === 'light' ? 'text-gray-800' : 'text-gray-200';
  const [open, setOpen] = useState(false);

  const handleClick = () => {
        setOpen(true); 
    setTimeout(() => {
      setCart([]);
    }, 700);
  };

  const handleClose = (event, reason) => {
    console.log("Snackbar close:", reason);
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex >= 0) {
      const updatedCart = [...cart];
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1; 
      } else {
        updatedCart.splice(itemIndex, 1); 
      }
      setCart(updatedCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cart.length === 0) {
    return (
      <div className={containerClass}>
        <p className={titleClass}>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <h1>CART</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th className={`table-header ${textClass}`}>Product</th>
            <th className={`table-header ${textClass}`}>Quantity</th>
            <th className={`table-header ${textClass}`}>Price</th>
            <th className={`table-header ${textClass}`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cart-item">
              <td className={`table-cell ${textClass}`}>
                <img src={item.image_url} alt={item.name} className="cart-item-image" />
                {item.name}
              </td>
              <td className={`table-cell ${textClass}`}>{item.quantity}</td>
              <td className={`table-cell ${textClass}`}>${(item.price * item.quantity).toFixed(2)}</td>
              <td className={`table-cell ${textClass}`}>
                <button onClick={() => handleDelete(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <p className={`total-price ${textClass}`}>Total: ${calculateTotal().toFixed(2)}</p>
        <button onClick={handleClick} className="place-order-button">Place Order</button>
        <Snackbar 
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Order placed! Your cart is now empty."
        />
      </div>
    </div>
  );
};

export default Cart;
