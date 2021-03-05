import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { hideCart } from "../../redux/controls/controlsActions"

import CartSummary from "./cartSummary"
import ContinueButton from "../utilities/continueButton"
import CheckoutButton from "../utilities/checkoutButton"

const CartContainer = ({ controls, hideCart, cart, inHome }) => {
  const { isCartOpen } = controls
  const { orders } = cart
  const isOrder = orders.some(order => order.engraveDetails.length > 0)

  const handleHideCart = () => {
    hideCart()
  }

  return (
    <div
      className={`${
        (isCartOpen && "translate-x-0") || "transform translate-x-full"
      } transition duration-500 ease-out grid grid-cols-5 w-full h-full fixed top-0 bottom-0 left-0 right-0 z-50`}
    >
      <div
        className="h-full w-full bg-black bg-opacity-70 col-span-3"
        onClick={handleHideCart}
        onKeyDown={handleHideCart}
        role="button"
        aria-label="close cart"
        tabIndex={0}
      ></div>
      <div className="bg-white col-span-2 relative">
        <CartSummary
          cart={cart}
          handleHideCart={handleHideCart}
          isOrder={isOrder}
        />
        <div className="w-full absolute bottom-0">
          <ContinueButton handleHideCart={handleHideCart} inHome={inHome} />
          {isOrder && <CheckoutButton handleHideCart={handleHideCart} />}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ cart, controls }) => ({ cart, controls })
const mapDispatchToProps = dispatch => ({
  hideCart: () => dispatch(hideCart()),
})

CartContainer.propTypes = {
  cart: PropTypes.object.isRequired,
  controls: PropTypes.object.isRequired,
  inHome: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
