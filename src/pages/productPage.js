import React from 'react'
import ProductDetails from '../components/productDetails/productDetails'

const productPage = ({theme,wishList,setWishList,cart , setCart  }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <ProductDetails theme={theme}  wishList={wishList} setWishList={setWishList} cart={cart} setCart={setCart} />
    </div>
  )
}

export default productPage
