import React, { useState } from "react"
import PropTypes from "prop-types"

import HideButton from "../utilities/hideButton"
import CartEngraveDetails from "./cartEngraveDetails"

const CartItem = ({ order }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false)
  const handleShowDetails = () => setIsDetailsShown(!isDetailsShown)

  const isOrder = order.engraveDetails.length > 0
  const totalPrice = order.quantity * order.price

  return (
    isOrder && (
      <>
        <div className="mb-2 w-full grid grid-cols-4 font-primary text-sm">
          <div className="col-span-2 text-left ">
            <h4 className="text-orange-450">Product</h4>
            <div className="-ml-4 flex">
              <HideButton
                controls={handleShowDetails}
                isHidden={isDetailsShown}
              />
              <p className="ml-0.5">
                {order.product}
                {order.option && <span>({order.option})</span>}
              </p>
            </div>
          </div>
          <div className="col-span-1 text-center ">
            <h4 className="text-orange-450">Quantity</h4>
            <p>{order.quantity}</p>
          </div>
          <div className="col-span-1 text-right ">
            <h4 className="text-orange-450">Price</h4>
            <p>{`₱${totalPrice}`}</p>
          </div>
        </div>
        <CartEngraveDetails
          option={order.option}
          price={order.price}
          order={order}
          isDetailsShown={isDetailsShown}
        />
      </>
    )
  )
}

CartItem.propTypes = {
  order: PropTypes.object,
}

export default CartItem
