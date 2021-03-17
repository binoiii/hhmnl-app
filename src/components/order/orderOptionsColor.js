import React from "react"

const OrderOptionsColor = ({ option, handleSelected, isActive }) => {
  return (
    <button
      className={`${isActive && "ring-1 ring-gray-400 opacity-100 "} ${
        option.option
      } opacity-30 p-2 mx-1 rounded-full outline-none focus:outline-none text-xs`}
      onClick={() => handleSelected(option)}
    ></button>
  )
}

OrderOptionsColor.propTypes = {}

export default OrderOptionsColor
