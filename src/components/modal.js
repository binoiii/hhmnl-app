import React, { useEffect } from "react"
import PropTypes from "prop-types"

const Modal = ({ children, show, onHide }) => {
  const hideOnEscapeKeyDown = e => {
    if (e.charCode || e.keyCode === 27) {
      onHide()
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", hideOnEscapeKeyDown)
    return function cleanUp() {
      document.body.removeEventListener("keydown", hideOnEscapeKeyDown)
    }
  })

  return (
    show && (
      <div
        className="flex justify-center items-center h-full w-full fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50"
        onClick={onHide}
      >
        <div
          className="relative w-lg bg-white"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute -top-5 -right-5 font-primary text-sm text-gray-300"
            onClick={onHide}
          >
            X
          </button>
          <div className="h-96 w-lg">{children}</div>
        </div>
      </div>
    )
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Modal
