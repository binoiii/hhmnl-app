import React from "react"
import PropTypes from "prop-types"

import { Hidden } from "../icons"

const HideButton = ({ isHidden, controls }) => (
  <button className="outline-none focus:outline-none" onClick={controls}>
    <Hidden
      className={`text-sm text-orange-450 transition duration-200 ease-out transform ${
        (isHidden && "rotate-90") || "rotate-0"
      }`}
    />
  </button>
)

HideButton.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  controls: PropTypes.func.isRequired,
}

export default HideButton
