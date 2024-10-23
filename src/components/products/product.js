import React from "react";
import { Link } from "react-router-dom";
import './product.css'; 
import wishlist_icon_light from "../../assets/wishlist-light.png";

export default function Product({ product, setWishList, wishList }) { 

  const addToFav = (product) => {
    if (!wishList.some(item => item.id === product.id)) {
      setWishList([...wishList, product]); 
      console.log("Product added to wishlist:", product); 
    } else {
      alert("This item is already in your wishlist.");
    }
  };
  

  return (
    <div className="product-container">
      <div className="icon-container" aria-label="Favorite" title="Add to Wishlist">
        <img 
          onClick={() => addToFav(product)} 
          src={wishlist_icon_light}
          alt="Add to Wishlist" 
        />    
      </div>

      <div className="product-image">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="h-full w-full object-contain" 
          onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder.jpg'; }} 
        />
      </div>

      <Link to={`${product.id}`}>
        <h2 className="product-name">{product.name}</h2>
      </Link>
      <p className="product-price">
        <strong>${product.price}</strong>
      </p>
      <button className="add-to-cart-button" aria-label={`Add ${product.name} to cart`}>
        Add to cart
      </button>
    </div>
  );
}
