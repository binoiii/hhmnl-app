import React from "react"
import PropTypes from "prop-types"

import { Next } from "../icons"

const CarouselNextButton = ({ handleNext }) => {
  return (
    <div className="absolute top-1/2 right-3 z-50 transform -translate-y-1/2">
      <button className="outline-none focus:outline-none" onClick={handleNext}>
        <Next className="text-xl text-gray-600" />
      </button>
    </div>
  )
}

CarouselNextButton.propTypes = {
  handleNext: PropTypes.func.isRequired,
}

export default CarouselNextButton
