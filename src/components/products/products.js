import React from "react"

import ItemCounter from "./itemCounter"
import ProductCard from "./productCard"

const Products = () => {
  return (
    <div
      id="products"
      className="md:mt-20 flex flex-col justify-center items-center"
    >
      <h2 className="font-secondary text-orange-450 text-4xl italic">
        Products
      </h2>
      <div className="md:m-8 flex">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ItemCounter />
    </div>
  )
}

export default Products

//ProductName
//Description
//Price
//ImageUrl

//Cart Reducer
//Product Reducer

//Create the individual first
//Load Products MAP
