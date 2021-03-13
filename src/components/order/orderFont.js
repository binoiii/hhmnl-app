import React, { useState } from "react"
import { connect } from "react-redux"

import PropTypes from "prop-types"
import FontsContainer from "../fonts/fontsContainer"

const OrderFont = ({ orders, engraveID, productName }) => {
  const order = orders.orders.find(order => order.productName === productName)

  const { font, name } = order.engraveDetails
    ? order.engraveDetails.find(detail => detail.engraveID === engraveID)
    : ""

  const orderNumber =
    order.engraveDetails.findIndex(order => order.engraveID === engraveID) + 1

  const [engraveName, setName] = useState(name)

  const handleChange = e => setName(e.target.value)

  return (
    <div className="mb-3 mx-2 flex flex-col items-center">
      <h5 className="mb-2 md:self-start font-primary text-xs text-orange-450">
        {`${productName} # ${orderNumber}`}
      </h5>
      <div className="flex">
        <div className="mr-4 flex flex-col">
          <label className="font-primary text-xxs" htmlFor="name">
            Name
          </label>
          <input
            className="px-2 h-8 w-32 font-primary text-xs border outline-none focus:outline-none"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-primary text-xxs" htmlFor="font">
            Font
          </label>
          <FontsContainer
            productName={productName}
            engraveID={engraveID}
            engraveName={engraveName}
            font={font}
          />
        </div>
      </div>
      <div className="mt-2">
        <div className="flex flex-col">
          <label className="font-primary text-xxs" htmlFor="result">
            Result
          </label>
          <div
            className={`p-2 w-72 h-12 bg-white ${
              font || "font-primary"
            } flex justify-center items-center border outline-none focus:outline-none `}
          >
            {name}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ orders }) => ({ orders })

OrderFont.propTypes = {
  orders: PropTypes.object.isRequired,
  engraveID: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(OrderFont)
