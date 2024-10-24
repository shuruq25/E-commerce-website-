import React from "react";
import "./products.css";
import Product from "./product";

export default function Products({ productList ,userInput,  theme, wishList, setWishList ,cart , setCart }) {

const result=productList.filter((product)=>
  product.name.toLowerCase().includes(userInput.toLowerCase()));

let products=productList;
if(userInput){
  products=result;

}

  return (
    <div>
      <div className="productList">
        {products.map((product) => (
          <Product  theme={theme} 
          key={product.id}
           product={product} 
            wishList={wishList}
            setWishList={setWishList} 
            cart={cart}
            setCart={setCart} />
        ))}
      </div>
    </div>
  );
}
