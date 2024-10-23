import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Productsitem from './pages/Products';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Product from './pages/productPage'; 
import Wishlist from './pages/wishlist';
import Error from '../src/assets/error.jpg';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const url = "https://fake-coffee-api.vercel.app/api";
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
    document.body.className = theme;
  }, [theme]);

  const getData = async () => { 
    try {
      const response = await axios.get(url);
      setProductList(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
      </div>
    );
  }

  const limitedProductList = productList.slice(0, 5); 

  return (
    <div className='container'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<HomePage theme={theme} productList={limitedProductList} loading={loading} error={error}/>} />
        <Route path='/products' element={<Productsitem theme={theme} productList={productList} setUserInput={setUserInput} userInput={userInput} wishList={wishList} setWishList={setWishList} />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<Product theme={theme} />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishlist' element={<Wishlist  theme={theme} wishList={wishList} setWishList={setWishList} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer theme={theme} /> 
    </div>
  );
}

export default App;
