import React from "react"
import PropTypes from "prop-types"

const CarouselDots = ({ activeImage, handleSetImage, images }) => {
  return (
    <div className="flex absolute bottom-2 right-1/2 z-50 transform translate-x-1/2">
      {images &&
        images.map((img, index) => (
          <button key={index} onClick={() => handleSetImage(index + 1)}>
            <div
              className={`${
                (activeImage === index + 1 && "bg-orange-450") || "bg-gray-600"
              } mx-2 w-1.5 h-1.5  rounded-full`}
            ></div>
          </button>
        ))}
    </div>
  )
}

CarouselDots.propTypes = {
  activeImage: PropTypes.number.isRequired,
  handleSetImage: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
}

export default CarouselDots
