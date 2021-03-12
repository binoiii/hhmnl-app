import React, { useState } from "react"
import PropTypes from "prop-types"

import Modal from "../modal"
import Carousel from "../carousel/carouselContainer"

const ProductCardImage = ({ thumbImage: { alt, image }, images }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleHide = () => {
    setShow(false)
  }

  return (
    <>
      <button
        className="outline-none focus:outline-none cursor-pointer"
        onClick={handleShow}
      >
        <img alt={alt} src={image} className="w-40 sm:w-60 md:w-72" />
      </button>
      {show && (
        <Modal onHide={handleHide}>
          <Carousel images={images} />
        </Modal>
      )}
    </>
  )
}

ProductCardImage.propTypes = {
  thumbImage: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
}

export default ProductCardImage
