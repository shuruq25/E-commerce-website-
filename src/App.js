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
import Login from './pages/login';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
    document.body.className = theme;
  }, [theme]);

  const url = "https://fake-coffee-api.vercel.app/api";
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = () => {
    axios.get(url)
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
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
        <img className="error" src="/path/to/error/image.png" alt="Error" />
      </div>
    );
  }

  const limitedProductList = productList.slice(0, 6); 

  return (
    <div className='container'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<HomePage theme={theme} productList={limitedProductList} />} />
        <Route path='/collection' element={<Productsitem theme={theme} productList={productList} />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer theme={theme} /> 
    </div>
  );
}

export default App;
