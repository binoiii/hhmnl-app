import React from "react"
import PropTypes from "prop-types"

import ProductCardBody from "./productCardBody"
import ProductCardImage from "./productCardImage"

const ProductCard = ({ productDetails }) => {
  const {
    productName,
    thumbImage,
    price,
    descriptions,
    images,
  } = productDetails

  return (
    <div className="mx-8 w-72 shadow-xl">
      <ProductCardImage thumbImage={thumbImage} images={images} />
      <ProductCardBody
        productName={productName}
        price={price}
        descriptions={descriptions}
        thumbImage={thumbImage}
      />
    </div>
  )
}

ProductCard.propTypes = {
  productDetails: PropTypes.object.isRequired,
}

export default ProductCard
