import React from "react"
import PropTypes from "prop-types"

const OrderTotal = ({ price, quantity }) => {
  return (
    <div className="w-full flex justify-between items-center flex-1">
      <p className="font-primary font-medium uppercase">subtotal</p>
      <p className="font-primary text-orange-450">{`₱${price * quantity}`}</p>
    </div>
  )
}

OrderTotal.propTypes = {
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default OrderTotal
