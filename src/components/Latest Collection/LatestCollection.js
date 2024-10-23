import React, { useRef } from 'react';
import './LatestCollection.css'; 

const LatestCollection = ({ productList, theme }) => {
  const productContainerRef = useRef(null); 

  const scrollLeft = () => {
    productContainerRef.current.scrollBy({
      left: -300, 
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    productContainerRef.current.scrollBy({
      left: 300, 
      behavior: 'smooth',
    });
  };

  return (
    <div className="latest-collection">
      <h1>Latest Collection</h1>
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={scrollLeft}>
          &#8592;
        </button>

        <div className="productList" ref={productContainerRef}>
          {productList.map((product) => (
            <div key={product.id} className={`product-card ${theme}`}>
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="product-image" 
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart">More Details</button>
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default LatestCollection;
