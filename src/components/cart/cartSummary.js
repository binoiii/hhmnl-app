import React from "react"
import { Link } from "gatsby"
import { Link as LinkScroll } from "react-scroll"
import PropTypes from "prop-types"

import CartTotal from "./cartTotal"
import CartItemSummary from "./cartItemSummary"
import { Add } from "../icons"

const CartSummary = ({ cart, isOrder, inHome, handleHideCart }) => {
  const { orders } = cart

  return (
    <div className="m-8">
      <h2 className="mb-4 font-secondary text-orange-450 text-3xl italic text-center tracking-wide">
        Cart Summary
      </h2>
      {isOrder ? (
        <div className="flex flex-col items-center">
          <CartTotal cart={cart} />
          <CartItemSummary orders={orders} />
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="mb-4 font-primary">Happy shopping!</p>
          <p className="mb-4 font-primary">Add items to your cart</p>
          {(inHome && (
            <LinkScroll to="products" smooth duration={500}>
              <button
                className="outline-none focus:outline-none"
                onClick={handleHideCart}
              >
                <Add className="text-3xl text-orange-450 opacity-60" />
              </button>
            </LinkScroll>
          )) || (
            <Link to="/">
              <button
                className="outline-none focus:outline-none"
                onClick={handleHideCart}
              >
                <Add className="text-3xl text-orange-450 opacity-60" />
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

CartSummary.propTypes = {
  cart: PropTypes.object.isRequired,
  isOrder: PropTypes.bool.isRequired,
}

export default CartSummary
