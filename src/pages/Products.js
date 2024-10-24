import React from "react";
import Productslist from "../components/products/products";
import Form from "../components/form/form";

const Products = ({ theme, productList, setUserInput, userInput,setWishList,wishList }) => {
  return (
    <div className={theme === "dark" ? "bg-black-800 text-white" : "bg-white text-gray-800"}>
      <div className="w-6x5 mx-1 p-6 flex">
        <div className="w-0.6/3 mr-4">
          <h3 className="text-3x2 font-extrabold mb-6">Search Products</h3>
          <Form setUserInput={setUserInput} />
        </div>
        <div className="w-2.4/3">
          <h1 className="text-3xl font-extrabold mb-6">Our Products</h1>
          <Productslist productList={productList} theme={theme} userInput={userInput}  wishList={wishList} setWishList={setWishList} />
        </div>
      </div>
    </div>
  );
};

export default Products;
