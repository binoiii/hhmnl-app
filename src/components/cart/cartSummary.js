import React, { useRef } from "react"
import { Link } from "gatsby"
import { Link as LinkScroll } from "react-scroll"
import PropTypes from "prop-types"

import { Add } from "../icons"
import CartTotal from "./cartTotal"
import CartItemSummary from "./cartItemSummary"
import ContinueButton from "../utilities/continueButton"
import CheckoutButton from "../utilities/checkoutButton"
import { useLockScroll } from "../utilities/utilityFunctions"

const CartSummary = ({ cart, isOrder, inHome, handleHideCart }) => {
  const { orders } = cart

  const cartRef = useRef(null)
  useLockScroll(cartRef)

  return (
    <div className="h-full flex flex-col" ref={cartRef}>
      <h2 className="mb-4 font-secondary text-orange-450 text-3xl italic text-center tracking-wide">
        Cart Summary
      </h2>
      {isOrder ? (
        <div className="mx-8 h-full">
          <CartTotal cart={cart} />
          <CartItemSummary orders={orders} />
        </div>
      ) : (
        <div className="mt-8 mx-8 flex flex-col items-center flex-1">
          <p className="mb-4 font-primary">Happy shopping!</p>
          <p className="mb-4 font-primary">Add items to your cart</p>
          {(inHome && (
            <LinkScroll to="products" smooth duration={500}>
              <button
                className="outline-none focus:outline-none"
                onClick={handleHideCart}
              >
                <Add className="text-3xl text-orange-450" />
              </button>
            </LinkScroll>
          )) || (
            <Link to="/">
              <button
                className="outline-none focus:outline-none"
                onClick={handleHideCart}
              >
                <Add className="text-3xl text-orange-450" />
              </button>
            </Link>
          )}
        </div>
      )}
      <div className="flex-shrink-0">
        <ContinueButton handleHideCart={handleHideCart} inHome={inHome} />
        {isOrder && <CheckoutButton handleHideCart={handleHideCart} />}
      </div>
    </div>
  )
}

CartSummary.propTypes = {
  cart: PropTypes.object.isRequired,
  isOrder: PropTypes.bool.isRequired,
}

export default CartSummary
