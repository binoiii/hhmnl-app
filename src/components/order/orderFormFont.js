import React from "react"
import PropTypes from "prop-types"
import OrderFont from "./orderFont"

const OrderFormFont = ({ productName, engraveDetails }) => {
  return (
    <div className="w-80 h-40 overflow-y-auto overscroll-contain">
      {engraveDetails &&
        engraveDetails.map(({ engraveID }) => (
          <OrderFont
            key={engraveID}
            engraveID={engraveID}
            productName={productName}
          />
        ))}
    </div>
  )
}

OrderFormFont.propTypes = {
  productName: PropTypes.string.isRequired,
  engraveDetails: PropTypes.array.isRequired,
}

export default OrderFormFont
