import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProductCardImage = () => {
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
    <div>
      <Img alt={name} fluid={fluid} className="md:w-72" />
    </div>
  )
}

export default ProductCardImage
