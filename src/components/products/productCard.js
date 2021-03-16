import React from "react"
import PropTypes from "prop-types"

import ProductCardBody from "./productCardBody"
import ProductCardImage from "./productCardImage"

const ProductCard = ({ productDetails }) => {
  const {
    productName,
    thumbImage,
    options,
    price,
    descriptions,
    images,
  } = productDetails

  return (
    <div className="mx-2 sm:mx-4 md:mx-8 mb-4 sm:mb-8 md:mb-16 w-36 sm:w-60 md:w-72 flex flex-col shadow-xl">
      <ProductCardImage thumbImage={thumbImage} images={images} />
      <ProductCardBody
        productName={productName}
        options={options}
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
