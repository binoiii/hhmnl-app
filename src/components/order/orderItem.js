import React from "react"
import PropTypes from "prop-types"

import OrderTotal from "./orderTotal"
import OrderCounter from "./orderCounter"

const OrderItem = ({
  productName,
  price,
  quantity,
  thumbImage: { alt, image },
}) => {
  return (
    <div className="h-32 md:h-full flex md:flex-col bg-white md:border-r">
      <img alt={alt} src={image} className="md:w-full" />
      <div className="flex-1">
        <div className="px-1 sm:px-4 md:px-10 py-2 h-full flex flex-col">
          <h5 className="mb-2 md:mb-0 md:mt-6 font-primary text-orange-450 font-medium uppercase text-shadow-xs text-center tracking-wider">
            {productName}
          </h5>
          <OrderTotal price={price} quantity={quantity} />
          <OrderCounter productName={productName} quantity={quantity} />
        </div>
      </div>
    </div>
  )
}

OrderItem.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  engraveDetails: PropTypes.array.isRequired,
  thumbImage: PropTypes.object.isRequired,
}

export default OrderItem
