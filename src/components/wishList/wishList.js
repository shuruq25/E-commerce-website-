import React from 'react';
import './wishlist.css';

const WishList = ({ wishList = [], setWishList, theme }) => {
  const containerClass = theme === 'light' ? 'wishlist-container-light' : 'wishlist-container-dark';
  const titleClass = theme === 'light' ? 'wishlist-title-light' : 'wishlist-title-dark';
  const textClass = theme === 'light' ? 'text-gray-800' : 'text-gray-200';
  
  if (wishList.length === 0) {
    return (
      <div className={containerClass}>
        <p className={titleClass}>The wishlist is empty.</p>
      </div>
    );
  }

  const handleDelete = (id) => {
    setWishList(wishList.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1 className={titleClass}>Wishlist</h1>
      <p className={`text-2xl tracking-tight leading-6 ${textClass}`}>{wishList.length} items</p>
      <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
        {wishList.map((item) => (
          <div key={item.id} className="wishlist-item">
            <div className="relative">
              <img 
                src={item.image_url} 
                alt={item.name} 
                onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder.jpg'; }} 
              />
              <button 
                aria-label="delete" 
                onClick={() => handleDelete(item.id)} 
                className="absolute top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 p-1.5 bg-red-600 text-white hover:bg-red-500"
              >
                <svg className="fil-current" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 1L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="mt-6">
              <p className={`wishlist-item-name ${textClass}`}>{item.name}</p>
              <p className={`wishlist-item-price ${textClass}`}>${item.price}</p>
            </div>
            <button className="wishlist-button">More information</button>
            <button className="wishlist-button">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
