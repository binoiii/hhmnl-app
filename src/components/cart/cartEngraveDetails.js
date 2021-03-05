import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Minus } from "../icons"

import { removeItem } from "../../redux/cart/cartActions"

const CartEngraveDetails = ({
  order,
  products,
  isDetailsShown,
  removeItem,
}) => {
  const { price } = products.products.find(
    product => product.productName === order.product
  )
  return (
    <div>
      <div
        className={`${
          (isDetailsShown && "block") || "hidden"
        } mr-10 ml-2 mb-8 grid grid-cols-2 font-primary text-sm`}
      >
        <div className="text-center">
          <h4 className="text-orange-450">Name</h4>
          {order &&
            order.engraveDetails &&
            order.engraveDetails.map((details, index) => (
              <div key={index}>
                <p>{details.name}</p>
              </div>
            ))}
        </div>
        <div className="text-center">
          <h4 className="text-orange-450">Result</h4>
          {order &&
            order.engraveDetails &&
            order.engraveDetails.map((details, index) => (
              <div className="relative" key={index}>
                <p className={`${details.font}`}>{details.name}</p>
                <button
                  className="mt-1 absolute top-0 right-0 outline-none focus:outline-none"
                  onClick={() =>
                    removeItem({
                      id: details.engraveID,
                      product: order.product,
                      price,
                    })
                  }
                >
                  <Minus className="text-xs" />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ products }) => ({ products })

const mapDispatchToProps = dispatch => ({
  removeItem: details => dispatch(removeItem(details)),
})

CartEngraveDetails.propTypes = {
  order: PropTypes.object,
  products: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartEngraveDetails)
