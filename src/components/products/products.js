import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './products.css';

export default function Products({ theme }) {  
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getData() {
    axios.get(url)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  const productsToDisplay = products.slice(0, 5);

  return (
    <div className={`products ${theme}`}>
      <h1 className={`h1 ${theme}`}>Featured Products</h1>
      <div className="products-list">
        {productsToDisplay.map((product) => (
          <div className={`product-card ${theme}`} key={product.id}> 
            <img
              src={product.image || '/fallback-image.jpg'}  
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`}>
              <button className={`btn ${theme}`}>View Details</button> 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
