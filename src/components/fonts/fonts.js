import React from "react"
import PropTypes from "prop-types"

const Fonts = ({ children, handleOpen }) => {
  return (
    <div
      className="p-2 flex flex-col justify-center items-center h-20 w-36 bg-white border outline-none focus:outline-none absolute top-9 overflow-y-scroll overscroll-contain"
      onClick={handleOpen}
      onKeyDown={handleOpen}
      role="button"
      tabIndex={0}
    >
      <div className="h-full">{children}</div>
    </div>
  )
}

Fonts.propTypes = {
  children: PropTypes.node.isRequired,
  handleOpen: PropTypes.func.isRequired,
}

export default Fonts
