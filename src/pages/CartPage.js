import React from 'react'
import Cart from '../components/Cart/cart'

const cartPage = ({theme,cart,setCart}) => {

  return (
    <div>
       <div className="max-w-6xl mx-auto p-6">
      <Cart  theme={theme} cart={cart} setCart={setCart}/>
    </div>
    </div>
  )
}

export default cartPage
