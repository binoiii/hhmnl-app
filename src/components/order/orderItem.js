import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import AddToCartButton from "../utilities/addToCartButton"

const OrderItem = ({ productName, price, engraveDetails }) => {
  const data = useStaticQuery(graphql`
    query {
      productImage: file(relativePath: { eq: "products/bamboo-tumbler1.jpg" }) {
        name
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const {
    name,
    childImageSharp: { fluid },
  } = data.productImage

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
      ? setPromptMessage("*Missing name and font in your order")
      : missingName
      ? setPromptMessage("*Missing name in your order")
      : missingFont
      ? setPromptMessage("*Missing font in your order")
      : setPromptMessage("")
  }

  return (
    <div className="h-full border-r relative">
      <Img alt={name} fluid={fluid} className="w-full" />
      <div className="flex flex-col">
        <h5 className="py-4 font-primary text-sm font-medium uppercase text-shadow-xs text-center tracking-wider">
          {productName}
        </h5>
        <p className="pb-4 font-primary text-orange-450 font-medium text-center">
          {`₱${price}`}
        </p>
        <h4 className="mt-1 font-primary text-orange-450 text-xs text-center">
          {promptMessage}
        </h4>
        <div className="absolute bottom-0 w-full">
          <AddToCartButton
            productName={productName}
            handlePrompt={handlePrompt}
            missingData={missingData}
          />
        </div>
      </div>
    </div>
  )
}

OrderItem.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  engraveDetails: PropTypes.array.isRequired,
}

export default OrderItem
