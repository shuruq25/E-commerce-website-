import React from "react";
import "./products.css";
import Product from "./product"; 

export default function Products({ productList }) { 
  console.log(productList);

  return (
    <div>
      <h1>Products</h1>
      <div className="productList">
        {productList.map((product) => (
          <Product key={product.id} product={product} /> 
        ))}
      </div>
    </div>
  );
}
