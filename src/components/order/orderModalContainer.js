import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import OrderItem from "./orderItem"
import OrderTotal from "./orderTotal"
import OrderCounter from "./orderCounter"
import OrderFormFont from "./orderFormFont"
import OrderSummaryContainer from "../orderSummary/orderSummaryContainer"

const OrderModalContainer = ({ productName, price, orders, handleHide }) => {
  const { quantity, engraveDetails, isSubmitted } = orders.orders.find(
    product => product.productName === productName
  )

  return (
    <div className="h-96 w-lg">
      <div className="flex overflow-hidden">
        <div
          className={`${(isSubmitted && "static") || "hidden"} w-full h-full`}
        >
          <OrderSummaryContainer
            productName={productName}
            price={price}
            handleHide={handleHide}
          />
        </div>
        <div
          className={`${(isSubmitted && "hidden") || "static"} w-full h-full`}
        >
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
    </div>
  )
}

const mapStateToProps = ({ orders }) => ({ orders })

OrderModalContainer.propType = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  orders: PropTypes.object.isRequired,
  handleHide: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(OrderModalContainer)
