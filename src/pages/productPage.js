import React from 'react'
import ProductDetails from '../components/productDetails/productDetails'

const productPage = ({theme,wishList,setWishList}) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <ProductDetails theme={theme}  />
    </div>
  )
}

export default productPage
