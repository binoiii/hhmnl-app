import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { ShoppingCart } from "../icons"

const Cart = ({ className, size, cart: cart }) => {
  const quantity = cart.totalQuantity > 0 ? cart.totalQuantity : false
  return (
    <div>
      <div className="relative">
        <Link to="/cart">
          <ShoppingCart className={className} size={size} />
        </Link>
        {quantity && (
          <div className="w-5 h-5 flex justify-center items-center border border-orange-450 rounded-full bg-orange-450 absolute -top-2 -right-5">
            <span className="font-primary text-white text-xs">{quantity}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({ cart })

Cart.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  cart: PropTypes.object,
}

export default connect(mapStateToProps)(Cart)
