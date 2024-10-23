import React from "react";
import "./products.css";
import Product from "./product";

export default function Products({ productList }) {

  return (
    <div>
      <h1>Our Products</h1>
      <div className="productList">
        {productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
