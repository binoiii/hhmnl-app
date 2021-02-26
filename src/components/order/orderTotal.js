import React from "react"
import PropTypes from "prop-types"

const OrderTotal = ({ price, quantity }) => {
  return (
    <div className="my-8 px-16 w-full flex justify-between">
      <p className="font-primary text-xl font-medium uppercase self-end">
        subtotal
      </p>
      <p className="font-primary text-xl text-orange-450">{`₱${
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
