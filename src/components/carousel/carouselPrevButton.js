import React from "react"
import PropTypes from "prop-types"

import { Prev } from "../icons"

const CarouselPrevButton = ({ handlePrev }) => {
  return (
    <div className="absolute top-1/2 left-3 z-50 transform -translate-y-1/2">
      <button className="outline-none focus:outline-none" onClick={handlePrev}>
        <Prev className="text-xl text-gray-600" />
      </button>
    </div>
  )
}

CarouselPrevButton.propTypes = {
  handlePrev: PropTypes.func.isRequired,
}

export default CarouselPrevButton
