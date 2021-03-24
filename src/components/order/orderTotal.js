import React from "react"
import PropTypes from "prop-types"

const OrderTotal = ({ price, quantity }) => {
  return (
    <div className="h-8 md:h-16 mb-2 md:mb-0 px-4 sm:px-16 md:px-0 w-full flex justify-between items-center">
      <p className="font-primary text-sm text-orange-450 font-medium uppercase">
        subtotal
      </p>
      <p className="font-primary text-sm ">{`₱${price * quantity}`}</p>
    </div>
  )
}

OrderTotal.propTypes = {
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default OrderTotal
