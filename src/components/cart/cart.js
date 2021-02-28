import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { hideCart } from "../../redux/controls/controlsActions"

import CartSummary from "./cartSummary"

const Cart = ({ controls, hideCart }) => {
  const { isCartOpen } = controls

  const handleHideCart = () => {
    hideCart()
  }

  return (
    <div
      className={`${
        (isCartOpen && "translate-x-0") || "transform translate-x-full"
      } transition duration-500 ease-out grid grid-cols-3 h-full w-full fixed top-0 bottom-0 left-0 right-0 z-50`}
    >
      <div
        className="h-full w-full bg-black bg-opacity-70 col-span-2"
        onClick={handleHideCart}
      ></div>
      <div className="bg-white col-span-1">
        <CartSummary />
      </div>
    </div>
  )
}

const mapStateToProps = ({ controls }) => ({ controls })
const mapDispatchToProps = dispatch => ({
  hideCart: () => dispatch(hideCart()),
})

Cart.propTypes = {
  controls: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
