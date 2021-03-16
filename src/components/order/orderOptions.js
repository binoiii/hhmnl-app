import React from "react"

const OrderOptions = ({ option, handleSelected, isActive }) => {
  return (
    <button
      className={`${
        isActive && "ring-1 ring-orange-450"
      } px-2 py-1 mx-1 border outline-none focus:outline-none text-xs`}
      onClick={() => handleSelected(option)}
    >
      {option.option}
    </button>
  )
}

OrderOptions.propTypes = {}

export default OrderOptions
