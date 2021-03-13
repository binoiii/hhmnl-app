import React from "react"
import PropTypes from "prop-types"

const OrderPrompt = ({ promptMessage }) => {
  return (
    <h4 className="h-4">
      {promptMessage && (
        <p className="font-primary text-xs text-center italic">
          <span className="text-orange-450">*</span>
          {promptMessage}
        </p>
      )}
    </h4>
  )
}

OrderPrompt.propTypes = {
  promptMessage: PropTypes.string,
}

export default OrderPrompt
