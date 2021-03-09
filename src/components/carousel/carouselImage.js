import React from "react"
import PropTypes from "prop-types"

const CarouselImage = ({ img }) => {
  const { alt, image } = img

  return <img alt={alt} src={image} />
}

CarouselImage.propTypes = {
  img: PropTypes.object.isRequired,
}

export default CarouselImage
