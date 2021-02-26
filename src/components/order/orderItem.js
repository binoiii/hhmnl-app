import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import AddToCartButton from "../utilities/addToCartButton"

const OrderItem = ({ productName, price }) => {
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

  return (
    <div className="border-r">
      <Img alt={name} fluid={fluid} className="w-full" />
      <h5 className="py-4 font-primary text-sm font-medium uppercase text-shadow-xs text-center tracking-wider">
        {productName}
      </h5>
      <p className="pb-4 font-primary text-orange-450 font-medium text-center">
        {`₱${price}`}
      </p>
      <AddToCartButton productName={productName} />
    </div>
  )
}

OrderItem.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default OrderItem
