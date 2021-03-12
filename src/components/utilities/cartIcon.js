import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { ShoppingCart } from "../icons"

import { openCart } from "../../redux/controls/controlsActions"

const CartIcon = ({ className, size, cart, openCart }) => {
  const { totalQuantity } = cart

  const handleOpenCart = () => openCart()

  return (
    <div className="relative">
      <button
        className="outline-none focus:outline-none"
        onClick={handleOpenCart}
      >
        <ShoppingCart className={className} size={size} />
      </button>
      <div className="w-5 h-5 flex justify-center items-center border border-orange-450 rounded-full bg-orange-450 absolute -top-2 -right-5">
        <span className="font-primary text-white text-xs">{totalQuantity}</span>
      </div>
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({ cart })
const mapDispatchToProps = dispatch => ({
  openCart: () => dispatch(openCart()),
})

CartIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  cart: PropTypes.object,
  openCart: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
