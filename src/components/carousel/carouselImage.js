import React from "react"
import PropTypes from "prop-types"

const CarouselImage = ({ img }) => {
  const { alt, image } = img

  return (
    <div className="w-md">
      <img alt={alt} src={image} />
    </div>
  )
}

CarouselImage.propTypes = {
  img: PropTypes.object.isRequired,
}

export default CarouselImage
