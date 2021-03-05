import React from "react"
import { Link } from "gatsby"
import { Link as LinkScroll } from "react-scroll"
import PropTypes from "prop-types"

import { BackIcon } from "../icons"

const ContinueButton = ({ handleHideCart, inHome }) => {
  return (
    <>
      {(inHome && (
        <div>
          <LinkScroll to="products" smooth duration={500}>
            <button
              className="py-4 w-full bg-orange-450 font-primary text-xs text-white uppercase tracking-wider outline-none focus:outline-none cursor-pointer"
              onClick={handleHideCart}
            >
              <div className="flex items-center justify-center">
                <BackIcon className="text-white mr-2" />
                <span>continue shopping</span>
              </div>
            </button>
          </LinkScroll>
        </div>
      )) || (
        <div>
          <Link to="/">
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
      )}
    </>
  )
}

ContinueButton.propTypes = {
  handleHideCart: PropTypes.func.isRequired,
  inHome: PropTypes.bool,
}

export default ContinueButton
