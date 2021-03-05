import React from "react"
import PropTypes from "prop-types"

import CartItem from "./cartItem"

const CartItemSummary = ({ orders }) => {
  return (
    <div className="w-full">
      <h2 className="mb-4 font-secondary text-orange-450 text-3xl italic text-center tracking-wide">
        Items Summary
      </h2>
      {orders &&
        orders.map((order, index) => (
          <div key={index}>
            <CartItem key={index} order={order} />
          </div>
        ))}
    </div>
  )
}

CartItemSummary.propTypes = {
  orders: PropTypes.array.isRequired,
}

export default CartItemSummary
