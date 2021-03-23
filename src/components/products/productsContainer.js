import React, { useEffect } from "react"
import { connect } from "react-redux"

import ProductCard from "./productCard"
import { fetchProducts } from "../../redux/products/productsActions"

const ProductsContainer = ({
  products: { loading, products, error },
  fetchProducts,
}) => {
  useEffect(() => fetchProducts(), [fetchProducts])

  return (
    <div
      id="products"
      className="mt-32 mb-12 sm:mb-8 md:mb-0 flex flex-col justify-center items-center"
    >
      <h2 className="mb-8 font-secondary text-orange-450 text-4xl">Products</h2>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <h2 className="mx-4 my-16 text-center font-primary text-gray-700 text-2xl font-bold tracking-wide">
            Loading...
          </h2>
        ) : error ? (
          <h2 className="mx-4 my-8 text-center font-primary text-gray-700 text-2xl font-bold tracking-wide">
            Error in loading :( <br />
            Hit refresh
          </h2>
        ) : (
          products &&
          products.length > 0 &&
          products.map(productDetails => (
            <ProductCard
              key={productDetails.productID}
              productDetails={productDetails}
            />
          ))
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ products }) => ({
  products,
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
