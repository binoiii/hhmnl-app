import React from "react"
import { connect } from "react-redux"

import ProductCard from "./productCard"

const ProductsContainer = ({ products: { products } }) => {
  return (
    <div
      id="products"
      className="mt-20 flex flex-col justify-center items-center"
    >
      <h2 className="mb-4 font-secondary text-orange-450 text-4xl italic">
        Products
      </h2>
      <div className="flex flex-wrap justify-center">
        {products &&
          products.map(productDetails => (
            <ProductCard
              key={productDetails.productID}
              productDetails={productDetails}
            />
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ products }) => ({
  products,
})

export default connect(mapStateToProps)(ProductsContainer)
