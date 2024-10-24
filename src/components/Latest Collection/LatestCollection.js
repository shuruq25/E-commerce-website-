import React, { useRef } from "react";
import "./LatestCollection.css";
import { Link } from "react-router-dom";

const LatestCollection = ({ productList, theme }) => {
  const productContainerRef = useRef(null);

  return (
    <div className={`latest-collection ${theme}`}>
      <h1>Latest Collection</h1>
      <div className="productList" ref={productContainerRef}>
        {productList.map((product) => (
          <div key={product.id} className={`product-card ${theme}`}>
            <img
              src={product.image_url}
              alt={product.name}
              className="product-image"
            />
            <h3 className={`product-name ${theme === "dark" ? "dark" : ""}`}>
              {product.name}
            </h3>
            <p className="product-price">${product.price}</p>
            <Link to={`/products/${product.id}`}>
            <button className="add-to-cart">More Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
