import React from "react";
import Productslist from "../components/products/products";
import Form from "../components/form/form";

const Products = ({ theme, productList, setUserInput, userInput,setWishList,wishList, cart ,setCart }) => {
  return (
    <div className={theme === "dark" ? "bg-black-800 text-white" : "bg-white text-gray-800"}>
          <div className="max-w-6x3 mx-auto p-6">
          <h1 className="text-3xl font-extrabold mb-6">OUR PRODUCTS</h1>
          <Form setUserInput={setUserInput} />
          <Productslist productList={productList} theme={theme} userInput={userInput}  wishList={wishList} setWishList={setWishList} cart={cart} setCart={setCart} />
        </div>
      </div>  
     
  );
};

export default Products;
