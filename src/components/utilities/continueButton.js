import React from "react"
import { Link } from "react-scroll"

import { BackIcon } from "../icons"

const ContinueButton = ({ handleHideCart }) => {
  return (
    <div>
      <Link to="products" smooth duration={500}>
        <button
          className="py-4 w-full bg-orange-450 font-primary text-xs text-white uppercase tracking-wider outline-none focus:outline-none cursor-pointer"
          onClick={handleHideCart}
        >
          <div className="flex items-center justify-center">
            <BackIcon className="text-white mr-2" />
            <span>continue shopping</span>
          </div>
        </button>
      </Link>
    </div>
  )
}

export default ContinueButton
