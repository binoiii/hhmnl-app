import React, { useState } from "react"
import PropTypes from "prop-types"

import OrderPrompt from "./orderPrompt"
import OrderFormFont from "./orderFormFont"
import AddToCartButton from "../utilities/addToCartButton"

const OrderDetails = ({ productName, price, quantity, engraveDetails }) => {
  const [promptMessage, setPromptMessage] = useState("")

  const missingDataContainer = engraveDetails.filter(
    detail => detail.name === "" || detail.font === ""
  )

  const missingName = missingDataContainer.some(detail => detail.name === "")
  const missingFont = missingDataContainer.some(detail => detail.font === "")

  const missingData = {
    missingName,
    missingFont,
  }

  const handlePrompt = () => {
    missingName && missingFont
      ? setPromptMessage("Missing name and font in your order")
      : missingName
      ? setPromptMessage("Missing name in your order")
      : missingFont
      ? setPromptMessage("Missing font in your order")
      : setPromptMessage("")
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <OrderFormFont
        productName={productName}
        engraveDetails={engraveDetails}
      />
      <OrderPrompt promptMessage={promptMessage} />
      <AddToCartButton
        productName={productName}
        handlePrompt={handlePrompt}
        missingData={missingData}
      />
    </div>
  )
}

OrderDetails.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  engraveDetails: PropTypes.array.isRequired,
}

OrderDetails.defaultProps = {
  engraveDetails: [
    {
      engraveID: 1,
      name: "",
      font: "",
    },
  ],
}

export default OrderDetails
