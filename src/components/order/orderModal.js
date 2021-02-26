import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import OrderItem from "./orderItem"
import OrderTotal from "./orderTotal"
import OrderCounter from "./orderCounter"
import OrderFormFont from "./orderFormFont"
import OrderSummary from "../orderSummary/orderSummary"

const OrderModal = ({ productName, price, orders }) => {
  const { quantity, engraveDetails, isSubmitted } = orders.orders.find(
    product => product.productName === productName
  )

  return (
    <div className="flex overflow-hidden">
      <div className={`${(isSubmitted && "static") || "hidden"} w-full h-full`}>
        <OrderSummary productName={productName} price={price} />
      </div>
      <div className={`${(isSubmitted && "hidden") || "static"} w-full h-full`}>
        <div className="w-lg h-96 grid grid-cols-5">
          <div className="h-full col-span-2">
            <OrderItem
              productName={productName}
              price={price}
              engraveDetails={engraveDetails}
            />
          </div>
          <div className="flex flex-col items-center col-span-3">
            <OrderTotal price={price} quantity={quantity} />
            <OrderCounter productName={productName} quantity={quantity} />
            <OrderFormFont
              productName={productName}
              engraveDetails={engraveDetails}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ orders }) => ({ orders })

OrderModal.propType = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  orders: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(OrderModal)
