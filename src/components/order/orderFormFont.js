import React from "react"
import PropTypes from "prop-types"
import OrderFont from "./orderFont"

const OrderFormFont = ({ productName, engraveDetails }) => {
  return (
    <div className="flex-1">
      <div className="md:mx-8 pt-8 h-xs overflow-y-auto overscroll-contain">
        {engraveDetails &&
          engraveDetails.map(({ engraveID }) => (
            <OrderFont
              key={engraveID}
              engraveID={engraveID}
              productName={productName}
            />
          ))}
      </div>
    </div>
  )
}

OrderFormFont.propTypes = {
  productName: PropTypes.string.isRequired,
  engraveDetails: PropTypes.array.isRequired,
}

OrderFormFont.defaultProps = {
  engraveDetails: [
    {
      engraveID: 1,
      name: "",
      font: "",
    },
  ],
}

export default OrderFormFont
