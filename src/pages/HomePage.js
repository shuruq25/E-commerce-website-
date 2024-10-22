import React from 'react';
import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import Categories from '../components/Categories/Categories';
import Products from '../components/products/products';
import Promotions from '../components/Promotions/Promotions';
import Reviews from '../components/reviews/review';
import Footer from '../components/footer/footer';

export default function HomePage({ theme, setTheme }) {
  return (
    <div className="homepage">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Categories theme={theme} />
      <Products theme={theme}/>        
      <Promotions theme={theme} />
      <Reviews theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}


