import React from 'react'
import WishList from '../components/wishList/wishList'

const wishlist = ({theme,wishList,setWishList, cart,setCart}) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <WishList  theme={theme} wishList={wishList} setWishList={setWishList}   cart={cart} setCart={setCart} />
    </div>
  )
}

export default wishlist
