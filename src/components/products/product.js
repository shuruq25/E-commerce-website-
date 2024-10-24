import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import wishlist_icon_light from "../../assets/wishlist-light.png";

export default function Product({
  product,
  wishList,
  setWishList,
  cart,
  setCart,
}) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addToFav = (product) => {
    const isIncluded = wishList.some((item) => item.id === product.id);
    if (!isIncluded) {
      setWishList([...wishList, product]);
      setIsFavorited(true);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    } else {
      alert("This item is already in your wishlist.");
    }
  };
  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 99));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex >= 0) {
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCart(updatedCart);
  };

  return (
    <div className="product-container">
      <div
        className="icon-container"
        aria-label="Favorite"
        title="Add to Wishlist"
      >
        <img
          onClick={() => addToFav(product)}
          src={wishlist_icon_light}
          alt="Add to Wishlist"
          style={{
            cursor: "pointer",
            filter: isFavorited ? "grayscale(0)" : "grayscale(1)",
          }}
        />
      </div>

      <div className="product-image">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-full w-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "path/to/placeholder.jpg";
          }}
        />
      </div>

      <Link to={`/products/${product.id}`}>
        <h2 className="product-name">{product.name}</h2>
      </Link>
      <p className="product-price">
        <strong>${product.price}</strong>
      </p>
      <button
        onClick={() => addToCart(product)}
        className="add-to-cart-button"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to cart
      </button>

      {open && <div className="notification">Product added to wishlist!</div>}
    </div>
  );
}
