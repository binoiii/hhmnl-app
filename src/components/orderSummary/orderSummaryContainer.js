import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { v4 as uuidv4 } from "uuid"

import OrderModifyButton from "./orderModifyButton"
import OrderSummaryFonts from "./orderSummaryFonts"

import { addToCart } from "../../redux/cart/cartActions"
import { clearOrder } from "../../redux/order/orderActions"
import { openCart } from "../../redux/controls/controlsActions"

const OrderSummaryContainer = ({
  productName,
  // price,
  orders,
  addToCart,
  clearOrder,
  handleHide,
  openCart,
}) => {
  const {
    productName: product,
    selected,
    quantity,
    engraveDetails,
  } = orders.orders.find(order => order.productName === productName)

  const submitDetails = {
    productName,
    isSubmitted: false,
  }

  const { price } = selected
  const { option } = selected.option ? selected : ""

  const totalPrice = quantity * price

  const orderItemDetails = {
    orderID: uuidv4(),
    details: {
      product,
      option,
      totalPrice,
      quantity,
      price,
      engraveDetails,
    },
  }

  const handleDirectCheckout = () => {
    handleHide()
    addToCart(orderItemDetails)
    clearOrder(submitDetails)
  }

  const hanldeAddToCart = () => {
    handleHide()
    openCart()
    addToCart(orderItemDetails)
    clearOrder(submitDetails)
  }

  return (
    <div className="p-6 h-full flex flex-col items-center">
      <h3 className="mb-4 font-secondary text-3xl text-orange-450 italic">
        Order Summary
      </h3>
      <div className="mb-4 px-2 py-4 w-80 flex flex-col justify-center border-b border-t border-orange-450">
        <div className="flex justify-between">
          <h4 className="font-primary text-sm font-medium text-orange-450 uppercase">
            subtotal
          </h4>
          <p className="font-primary text-sm">{`₱${totalPrice}`}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-primary text-sm font-medium text-orange-450 uppercase">
            product
          </h4>
          <p className="font-primary text-sm">
            {`${product}`}
            {option && <span> - {option}</span>}
          </p>
        </div>
      </div>
      <OrderSummaryFonts engraveDetails={engraveDetails} />
      <div>
        <div className="mb-2 text-center">
          <Link to="/checkout">
            <button
              className="w-20 bg-white-450 font-primary text-xs text-orange-450 uppercase text-center tracking-wider outline-none focus:outline-nonecursor-pointer"
              onClick={handleDirectCheckout}
            >
              checkout
            </button>
          </Link>
          <span className="mx-2 font-primary text-xs">or</span>
        </div>
        <div>
          <OrderModifyButton productName={productName} />
          <button
            className="ml-2 py-2 w-36 bg-white-450 border border-orange-450 font-primary text-xs text-orange-450 uppercase text-center tracking-wider outline-none focus:outline-none cursor-pointer"
            onClick={hanldeAddToCart}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ orders }) => ({ orders })

const mapDispatchToProps = dispatch => ({
  addToCart: orders => dispatch(addToCart(orders)),
  clearOrder: details => dispatch(clearOrder(details)),
  openCart: () => dispatch(openCart()),
})

OrderSummaryContainer.propTypes = {
  productName: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  handleHide: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummaryContainer)
