import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Productsitem from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import Product from "./pages/ProductPage";
import Wishlist from "./pages/WishlistPage";
import Error from "./assets/error.jpg";
import Errorpage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("current_theme") || "light"
  );
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("current_wishlist")) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("current_cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("current_wishlist", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    localStorage.setItem("current_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://fake-coffee-api.vercel.app/api"
        );
        setProductList(response.data);
      } catch (error) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="progress">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img className="error" src={Error} alt="Error" />
        <p>{error}</p>
      </div>
    );
  }

  const limitedProductList = productList.slice(0, 5);

  return (
    <div className="container">
      <Navbar
        theme={theme}
        setTheme={setTheme}
        wishList={wishList}
        cart={cart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              theme={theme}
              productList={limitedProductList}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Productsitem
              theme={theme}
              productList={productList}
              setUserInput={setUserInput}
              userInput={userInput}
              wishList={wishList}
              setWishList={setWishList}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/products/:id"
          element={
            <Product
              theme={theme}
              wishList={wishList}
              setWishList={setWishList}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              theme={theme}
              wishList={wishList}
              setWishList={setWishList}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart theme={theme} cart={cart} setCart={setCart} />}
        />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
