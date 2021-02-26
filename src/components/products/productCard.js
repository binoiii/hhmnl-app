import React from "react"
import PropTypes from "prop-types"

import ProductBody from "./productBody"
import ProductCardImage from "./productCardImage"

const ProductCard = ({ productDetails }) => {
  const { productName, price, descriptions } = productDetails

  return (
    <div className="mx-8 w-72 shadow-xl">
      <ProductCardImage />
      <ProductBody
        productName={productName}
        price={price}
        descriptions={descriptions}
      />
    </div>
  )
}

ProductCard.propTypes = {
  productDetails: PropTypes.object.isRequired,
}

export default ProductCard
