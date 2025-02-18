import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import "./productDetails.css";

const ProductDetails = ({ theme, wishList, setWishList, cart, setCart }) => {
  const { id } = useParams();
  const url = `https://fake-coffee-api.vercel.app/api/${id}`;
  const [snackbar, setSnackbar] = useState({ open: false, message: "Something want wrong" });
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        const fetchedProduct = response.data[0];
        setProduct(fetchedProduct);
      } catch (error) {
        setError("Failed to load product data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 99));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const addToFav = (product) => {
    if (!wishList.some(item => item.id === product.id)) {
      setWishList([...wishList, product]);
      showSnackbar(`A ${product.name} has been added to your wishlist`);
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

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
  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div>Product not found.</div>;

  const {
    name,
    image_url,
    price,
    region,
    weight,
    grind_option,
    description,
  } = product;

  return (
    <div className={`container ${theme}`}>
      <div className="product-wrapper">
        <div className="flex-row">
          <div className="image-wrapper">
            <img
              className="product-image"
              src={image_url}
              alt={`Image of ${name}`}
            />
            <div className="flex-row mb-4">
              <button
                onClick={() => addToCart(product)}
                className={`button add-to-cart ${theme}`}
              >
                Add to Cart
              </button>
              <button 
                onClick={() => addToFav(product)} 
                className={`button add-to-wishlist ${theme}`}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
          <div className="flex-1 px-4">
            <h2 className={`product-title ${theme}`}>{name}</h2>
            <h3 className={`description ${theme}`}>
              Description:
              <p>{description || "Not available"}</p>
            </h3>
            <div className="price-region">
              <p>
                <span className="font-bold">
                  Price: ${price?.toFixed(2) || "Not available"}
                </span>
              </p>
              <p>
                <span className="font-bold">
                  Region: {region || "Not available"}
                </span>
              </p>
            </div>
            <div>
              <span className="font-bold">Select Grind:</span>
              <div className="flex items-center mt-2">
                {grind_option && grind_option.length ? (
                  grind_option.map((option, index) => (
                    <label key={index} className="mr-4">
                      <input
                        type="radio"
                        name="grindOption"
                        value={option}
                        className="mr-1"
                      />
                      {option}
                    </label>
                  ))
                ) : (
                  <span>Not available</span>
                )}
              </div>
            </div>
            <div>
              <span className="font-bold">Weight:</span>
              <span>{weight ? `${weight}g` : "Not available"}</span>
            </div>
            <div className="quantity-control">
              <button
                onClick={decreaseQuantity}
                className="button-control"
              >
                -
              </button>
              <input
                type="number"
                className={`quantity-input ${theme}`}
                value={quantity}
                readOnly
              />
              <button
                onClick={increaseQuantity}
                className="button-control"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackbar.message}
      />
    </div>
  );
};

export default ProductDetails;
