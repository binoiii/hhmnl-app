import React from "react"
import ProductBody from "./productBody"
import ProductCardImage from "./productCardImage"

const ProductCard = () => {
  return (
    <div className="mx-8 w-72 shadow-xl">
      <ProductCardImage />
      <ProductBody />
    </div>
  )
}

export default ProductCard
