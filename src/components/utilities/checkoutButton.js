import React from "react"
import { Link } from "gatsby"

import { Bag } from "../icons"

const CheckoutButton = ({ handleHideCart }) => {
  return (
    <div>
      <Link to="/">
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

export default CheckoutButton
