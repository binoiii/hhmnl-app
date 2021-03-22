import React from "react"
import PropTypes from "prop-types"

const CarouselImage = ({ img }) => {
  const { alt, image } = img

  console.log(image)

  return (
    <div className="w-sm md:w-md">
      <img alt={alt} src={image} loading="lazy" />
    </div>
  )
}

CarouselImage.propTypes = {
  img: PropTypes.object.isRequired,
}

export default CarouselImage
