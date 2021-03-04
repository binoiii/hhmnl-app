import React, { useState } from "react"
import PropTypes from "prop-types"

import { Hidden } from "../icons"
import CartEngraveDetails from "./cartEngraveDetails"

const CartItemSummary = ({ orders }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false)

  const handleShowDetails = () => setIsDetailsShown(!isDetailsShown)
  return (
    <div className="w-full">
      <h2 className="mb-4 font-secondary text-orange-450 text-3xl italic text-center tracking-wide">
        Items Summary
      </h2>
      {orders &&
        orders.map((order, index) => (
          <div key={index}>
            <div className="mb-2 w-full grid grid-cols-3 font-primary text-sm relative">
              <button
                className="absolute -left-5 top-6 outline-none focus:outline-none"
                onClick={handleShowDetails}
              >
                <Hidden
                  className={`text-sm text-orange-450 transition duration-200 ease-out  transform ${
                    (isDetailsShown && "rotate-90") || "rotate-0"
                  }`}
                />
              </button>
              <div className="text-left">
                <h4 className="text-orange-450">Product</h4>
                <p>{order.product}</p>
              </div>
              <div className="text-center">
                <h4 className="text-orange-450">Quantity</h4>
                <p class>{order.quantity}</p>
              </div>
              <div className="text-right">
                <h4 className="text-orange-450">Price</h4>
                <p>{`₱${order.totalPrice}`}</p>
              </div>
            </div>
            {isDetailsShown && <CartEngraveDetails order={order} />}
          </div>
        ))}
    </div>
  )
}

CartItemSummary.propTypes = {
  orders: PropTypes.array.isRequired,
}

export default CartItemSummary
