import React, { useState } from "react"
import PropTypes from "prop-types"

import CartEngraveDetails from "./cartEngraveDetails"
import { Hidden } from "../icons"

const CartItem = ({ order }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false)
  const handleShowDetails = () => setIsDetailsShown(!isDetailsShown)

  const isOrder = order.engraveDetails.length > 0

  return (
    isOrder && (
      <div>
        <div className="mb-2 w-full grid grid-cols-3 font-primary text-sm">
          <div className="text-left">
            <h4 className="text-orange-450">Product</h4>
            <div className="flex">
              <button
                className="-ml-4 outline-none focus:outline-none"
                onClick={handleShowDetails}
              >
                <Hidden
                  className={`text-sm text-orange-450 transition duration-200 ease-out transform ${
                    (isDetailsShown && "rotate-90") || "rotate-0"
                  }`}
                />
              </button>
              <p>{order.product}</p>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-orange-450">Quantity</h4>
            <p>{order.quantity}</p>
          </div>
          <div className="text-right">
            <h4 className="text-orange-450">Price</h4>
            <p>{`₱${order.totalPrice}`}</p>
          </div>
        </div>
        <CartEngraveDetails order={order} isDetailsShown={isDetailsShown} />
      </div>
    )
  )
}

CartItem.propTypes = {
  order: PropTypes.object,
}

export default CartItem
