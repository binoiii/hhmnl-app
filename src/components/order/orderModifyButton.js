import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { unsubmitOrder } from "../../redux/order/orderActions"

const OrderModifyButton = ({ productName, unsubmitOrder }) => {
  const submitDetails = {
    productName,
    isSubmitted: false,
  }
  const handleUnsubmit = () => unsubmitOrder(submitDetails)

  return (
    <button
      className="ml-2 py-2 w-36 bg-orange-450 border border-orange-450 font-primary text-xs text-white uppercase text-center tracking-wider outline-none focus:outline-none cursor-pointer"
      onClick={handleUnsubmit}
    >
      modify order
    </button>
  )
}

OrderModifyButton.propTypes = {
  productName: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
  unsubmitOrder: status => dispatch(unsubmitOrder(status)),
})

export default connect(null, mapDispatchToProps)(OrderModifyButton)
