import React from "react"
import PropTypes from "prop-types"

const CartTotal = ({ cart }) => {
  const { totalQuantity, totalPrice } = cart

  return (
    <div className="mb-8 w-full">
      <div className="flex justify-between">
        <h3 className="font-primary text-orange-450">Subtotal</h3>
        <p className="font-primary">{`₱${totalPrice}`}</p>
      </div>
      <div className="flex justify-between">
        <h3 className="font-primary text-orange-450">Total Quantity</h3>
        <p className="font-primary">{totalQuantity}</p>
      </div>
    </div>
  )
}

CartTotal.propType = {
  cart: PropTypes.object,
}

export default CartTotal
