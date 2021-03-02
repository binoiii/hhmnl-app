import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Modal from "../modal"

const ProductCardImage = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleHide = () => setShow(false)

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
    <>
      <div
        className="outline-none focus:outline-none cursor-pointer"
        onClick={handleShow}
        onKeyDown={handleShow}
        role="button"
        tabIndex={0}
      >
        <Img alt={name} fluid={fluid} className="md:w-72" />
      </div>
      <Modal show={show} onHide={handleHide} />
    </>
  )
}

export default ProductCardImage
