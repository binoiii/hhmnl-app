import React from "react"

const OrderOptionsColor = ({ option, handleSelected, isActive }) => {
  const color = option.option.toLowerCase()

  const tailwindColor =
    color === "black" ? "bg-" + color : "bg-" + color + "-450"

  return (
    <button
      className={`${
        isActive && "ring-1 ring-gray-400 opacity-100"
      } ${tailwindColor} opacity-30 p-2 mx-1 rounded-full outline-none focus:outline-none text-xs`}
      onClick={() => handleSelected(option)}
      aria-label="color option"
    ></button>
  )
}

OrderOptionsColor.propTypes = {}

export default OrderOptionsColor
