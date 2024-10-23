import React from "react";
import "./product.css";

export default function Product({ product }) { 
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <img src={product.image_url} alt={product.name} />
      <p><strong>${product.price}</strong></p>
      <button>Add to cart</button>
    </div>
  );
}
