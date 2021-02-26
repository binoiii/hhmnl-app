import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { ShoppingCart } from "../icons"
import { submitOrder } from "../../redux/order/orderActions"

const AddToCartButton = ({ productName, submitOrder }) => {
  const submitStatus = {
    productName,
    isSubmitted: true,
  }

  const handleSubmit = () => submitOrder(submitStatus)

  return (
    <button
      className="py-4 flex justify-center items-center w-full bg-orange-450 outline-none focus:outline-none cursor-pointer"
      onClick={handleSubmit}
    >
      <ShoppingCart className="text-lg text-white" />
    </button>
  )
}

AddToCartButton.propTypes = {
  productName: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
  submitOrder: status => dispatch(submitOrder(status)),
})

export default connect(null, mapDispatchToProps)(AddToCartButton)
