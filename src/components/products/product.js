import React, { useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import "./product.css";
import wishlist_icon_light from "../../assets/wishlist-light.png";

export default function Product({
  product,
  wishList,
  setWishList,
  cart,
  setCart,
}) {
  const [quantity, setQuantity] = useState(1);
  const [snackbar, setSnackbar] = useState({ open: false, message: "Something want wrong" });


  const addToFav = (product) => {
    const isIncluded = wishList.some((item) => item.id === product.id);
    if (!isIncluded) {
      setWishList([...wishList, product]);
      showSnackbar(`A ${product.name} has been added to your wishlist`);

    }
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
    showSnackbar(`A ${product.name} has been added to your cart`);

  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const showSnackbar = (message) => {
    setSnackbar({ open: true, message });
    setTimeout(() => setSnackbar({ open: false, message: "" }), 3000);
  };
  return (
    <div>
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
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackbar.message}
      />
    </div>
  );
}
