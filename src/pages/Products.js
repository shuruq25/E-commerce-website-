import React from 'react'
import Productslist from '../components/products/products'

const Products = ({theme, productList }) => {
  return (
    <div>
          <div className="max-w-6xl mx-auto p-6">

            <Productslist productList={productList} theme={theme} /> 
</div>
    </div>
  )
}

export default Products
