import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import ScrollLock from "react-scrolllock"

import { hideCart } from "../../redux/controls/controlsActions"

import CartSummary from "./cartSummary"

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
      {isCartOpen && (
        <>
          <ScrollLock>
            <div
              className="h-full w-full bg-black bg-opacity-70 outline-none focus:outline-none col-span-1 sm:col-span-2 md:col-span-3"
              onClick={handleHideCart}
              onKeyDown={null}
              role="button"
              aria-label="close cart"
              tabIndex={0}
            ></div>
          </ScrollLock>
          <div className="pt-8 h-full bg-white col-span-4 sm:col-span-3 md:col-span-2 overflow-y-auto">
            <CartSummary
              cart={cart}
              handleHideCart={handleHideCart}
              inHome={inHome}
              isOrder={isOrder}
            />
          </div>
        </>
      )}
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
