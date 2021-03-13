import React from "react"
import PropTypes from "prop-types"
import OrderFont from "./orderFont"

const OrderFormFont = ({ productName, engraveDetails }) => {
  return (
    <div className="flex-1">
      <div className="my-4 mx-8 w-80 h-80 overflow-y-auto overscroll-contain">
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
