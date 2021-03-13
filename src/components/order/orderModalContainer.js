import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import OrderItem from "./orderItem"
import OrderDetails from "./orderDetails"
import OrderSummaryContainer from "../orderSummary/orderSummaryContainer"

const OrderModalContainer = ({
  productName,
  price,
  orders,
  handleHide,
  thumbImage,
}) => {
  const { quantity, engraveDetails, isSubmitted } = orders.orders.find(
    product => product.productName === productName
  )

  return (
    <div className="w-full md:w-lg h-md md:h-sm bg-white">
      <div className="w-full h-full">
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
          <div className="w-full h-full grid grid-rows-7 md:grid-rows-1 grid-cols-1 md:grid-cols-5">
            <div className="row-span-3 md:row-span-1 md:col-span-2">
              <OrderItem
                productName={productName}
                price={price}
                quantity={quantity}
                engraveDetails={engraveDetails}
                thumbImage={thumbImage}
              />
            </div>
            <div className="row-span-4 md:row-span-1 md:col-span-3">
              <OrderDetails
                productName={productName}
                price={price}
                quantity={quantity}
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
