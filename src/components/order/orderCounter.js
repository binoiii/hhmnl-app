import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { v4 as uuidv4 } from "uuid"

import {
  addQuantity,
  subtractQuantity,
  addEngraveDetails,
  removeEngraveDetails,
} from "../../redux/order/orderActions"

const OrderCounter = ({
  quantity,
  productName,
  addQuantity,
  subtractQuantity,
  addEngraveDetails,
  removeEngraveDetails,
}) => {
  const handleSubtract = () => {
    if (quantity > 1) {
      subtractQuantity({ productName, quantity: 1 })
      removeEngraveDetails({ productName })
    }
  }

  const handleAdd = () => {
    addQuantity({ productName, quantity: 1 })
    addEngraveDetails({
      productName,
      engraveDetail: {
        engraveID: uuidv4(),
        name: "",
        font: "",
      },
    })
  }

  return (
    <div className="mx-4 sm:mx-8 md:mx-0 md:mb-6 sm:px-8 md:px-0 min-w-0 flex">
      <button
        className="px-3 md:py-1 border border-orange-450 bg-orange-450 outline-none focus:outline-none text-white"
        onClick={handleSubtract}
      >
        -
      </button>
      <div className="min-w-2 w-full flex justify-center items-center text-sm md:text-base border-t border-b border-orange-450 bg-white outline-none focus:outline-none">
        {quantity}
      </div>
      <button
        className="px-3 border border-orange-450 bg-orange-450 outline-none focus:outline-none text-white"
        onClick={handleAdd}
      >
        +
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addQuantity: quantity => dispatch(addQuantity(quantity)),
  subtractQuantity: quantity => dispatch(subtractQuantity(quantity)),
  addEngraveDetails: engraveDetail =>
    dispatch(addEngraveDetails(engraveDetail)),
  removeEngraveDetails: id => dispatch(removeEngraveDetails(id)),
})

OrderCounter.propTypes = {
  quantity: PropTypes.number.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subtractQuantity: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
}

export default connect(null, mapDispatchToProps)(OrderCounter)
