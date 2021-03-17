import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Trash } from "../icons"

import { removeItem, clearCart } from "../../redux/cart/cartActions"

const CartEngraveDetails = ({
  cart,
  order,
  option,
  price,
  isDetailsShown,
  removeItem,
  clearCart,
}) => {
  const handleRemoveItem = (id, product) => {
    cart.totalQuantity === 1
      ? clearCart()
      : removeItem({ id, product, option, price })
  }

  return (
    <div>
      <div
        className={`${
          (isDetailsShown && "block") || "hidden"
        } mb-8 grid grid-cols-2 font-primary text-sm`}
      >
        <div>
          <h4 className="text-orange-450">Name</h4>
          {order &&
            order.engraveDetails &&
            order.engraveDetails.map((details, index) => (
              <div className="relative" key={index}>
                <p>
                  {details.name}
                  <button
                    className="mt-1 absolute top-0 -left-3.5 outline-none focus:outline-none"
                    onClick={() =>
                      handleRemoveItem(details.engraveID, order.product)
                    }
                  >
                    <Trash className="text-xs" />
                  </button>
                </p>
              </div>
            ))}
        </div>
        <div className="h-full text-right">
          <h4 className="text-orange-450">Result</h4>
          {order &&
            order.engraveDetails &&
            order.engraveDetails.map((details, index) => (
              <p key={index} className={`${details.font}`}>
                {details.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = dispatch => ({
  removeItem: details => dispatch(removeItem(details)),
  clearCart: () => dispatch(clearCart()),
})

CartEngraveDetails.propTypes = {
  cart: PropTypes.object.isRequired,
  order: PropTypes.object,
  option: PropTypes.string,
  price: PropTypes.number.isRequired,
  isDetailsShown: PropTypes.bool.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartEngraveDetails)
