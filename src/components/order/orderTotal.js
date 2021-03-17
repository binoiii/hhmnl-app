import React from "react"
import PropTypes from "prop-types"

const OrderTotal = ({ price, quantity }) => {
  return (
    <div className="mb-2 md:mb-0 px-4 sm:px-16 md:px-0 w-full flex justify-between items-center flex-1">
      <p className="font-primary text-sm font-medium uppercase">subtotal</p>
      <p className="font-primary text-sm text-orange-450">{`₱${
        price * quantity
      }`}</p>
    </div>
  )
}

OrderTotal.propTypes = {
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default OrderTotal
