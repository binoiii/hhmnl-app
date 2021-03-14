import React, { useState } from "react"
import PropTypes from "prop-types"

import HideButton from "../utilities/hideButton"
import CartEngraveDetails from "./cartEngraveDetails"

const CartItem = ({ order }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false)
  const handleShowDetails = () => setIsDetailsShown(!isDetailsShown)

  const isOrder = order.engraveDetails.length > 0

  return (
    isOrder && (
      <>
        <div className="mb-2 w-full grid grid-cols-3 font-primary text-sm">
          <div className="text-left">
            <h4 className="text-orange-450">Product</h4>
            <div className="-ml-4 flex">
              <HideButton
                controls={handleShowDetails}
                isHidden={isDetailsShown}
              />
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
      </>
    )
  )
}

CartItem.propTypes = {
  order: PropTypes.object,
}

export default CartItem
