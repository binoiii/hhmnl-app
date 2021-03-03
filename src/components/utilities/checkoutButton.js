import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Bag } from "../icons"

const CheckoutButton = ({ handleHideCart }) => {
  return (
    <div>
      <Link to="/checkout">
        <button
          className="py-4 w-full bg-white border border-orange-450 font-primary text-xs text-orange-450 uppercase tracking-wider outline-none focus:outline-none cursor-pointer"
          onClick={handleHideCart}
        >
          <div className="flex items-center justify-center">
            <Bag className="text-lg text-orange-450 mr-2" />
            <span>checkout</span>
          </div>
        </button>
      </Link>
    </div>
  )
}

CheckoutButton.propTypes = {
  handleHideCart: PropTypes.func.isRequired,
}

export default CheckoutButton
