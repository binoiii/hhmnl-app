import React from "react"
import PropTypes from "prop-types"

const CartEngraveDetails = ({ details }) => {
  const { name, font } = details

  return (
    <tr>
      <td className="font-primary text-sm text-left">{name}</td>
      <td className={`${font} text-sm text-center`}>{name}</td>
    </tr>
  )
}

CartEngraveDetails.propTypes = {
  details: PropTypes.object,
}

export default CartEngraveDetails
