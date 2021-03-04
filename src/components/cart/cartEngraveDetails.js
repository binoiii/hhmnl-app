import React from "react"
import PropTypes from "prop-types"

const CartEngraveDetails = ({ order }) => {
  return (
    <div>
      <div className="mx-8 mb-8 grid grid-cols-2 font-primary text-sm">
        <div className="text-center">
          <h4 className="text-orange-450">Name</h4>
          {order &&
            order.engraveDetails &&
            order.engraveDetails.map((details, index) => (
              <div key={index}>
                <p>{details.name}</p>
              </div>
            ))}
        </div>
        <div className="text-center">
          <h4 className="text-orange-450">Result</h4>
          {order &&
            order.engraveDetails &&
            order.engraveDetails.map((details, index) => (
              <div key={index}>
                <p className={`${details.font}`}>{details.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

CartEngraveDetails.propTypes = {
  order: PropTypes.object,
}

export default CartEngraveDetails
