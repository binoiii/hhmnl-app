import React from "react"
import PropTypes from "prop-types"

const Fonts = ({ children, handleOpen }) => {
  return (
    <div
      className="p-2 flex flex-col justify-center items-center h-20 w-36 bg-white border outline-none focus:outline-none absolute top-9 overflow-y-scroll overscroll-contain"
      onClick={handleOpen}
      role="button"
      onKeyDown={null}
      tabIndex={0}
      body-scroll-lock-ignore
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
