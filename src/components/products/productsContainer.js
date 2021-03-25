import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import ProductCard from "./productCard"
import { fetchProducts } from "../../redux/products/productsActions"

const ProductsContainer = ({
  products: { loading, products, error },
  fetchProducts,
}) => {
  useEffect(() => fetchProducts(), [fetchProducts])

  const [visibleProducts, setVisibleProducts] = useState(3)
  const handleSeeMore = () => setVisibleProducts(visibleProducts + 3)

  return (
    <div
      id="products"
      className="mt-32 mb-16 flex flex-col justify-center items-center"
    >
      <h2 className="mb-8 font-secondary text-orange-450 text-4xl">Products</h2>
      <div>
        {loading ? (
          <h2 className="mx-4 my-16 text-center font-primary text-gray-500 text-xl font-bold tracking-wide">
            Loading...
          </h2>
        ) : error ? (
          <h2 className="mx-4 my-8 text-center font-primary text-gray-500 text-xl font-bold tracking-wide">
            Error in loading :( <br />
            Hit refresh
          </h2>
        ) : (
          products &&
          products.length > 0 && (
            <div className="flex flex-col">
              <div className="flex flex-wrap justify-center">
                {products
                  .map(productDetails => (
                    <ProductCard
                      key={productDetails.productID}
                      productDetails={productDetails}
                    />
                  ))
                  .splice(0, visibleProducts)}
              </div>
              {visibleProducts < products.length && (
                <button
                  className="mx-auto py-4 w-40 bg-white border border-orange-450 font-primary text-xs text-orange-450 uppercase tracking-wider outline-none focus:outline-none"
                  onClick={handleSeeMore}
                >
                  More products
                </button>
              )}
            </div>
          )
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

ProductsContainer.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.object,
  error: PropTypes.bool,
  fetchProducts: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
