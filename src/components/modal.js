import React, { useRef } from "react"
import PropTypes from "prop-types"

import { useWindowEvent, useLockScroll } from "./utilities/utilityFunctions"

const Modal = ({ children, onHide }) => {
  const modalRef = useRef(null)

  const hideOnEscapeKeyDown = e => {
    const key = e.key || e.keyCode

    if (key === "Escape" || key === 27) return onHide()
  }

  useWindowEvent("keydown", hideOnEscapeKeyDown)
  // useLockScroll(modalRef)

  return (
    <div
      ref={modalRef}
      className="flex justify-center items-center h-full w-full fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 overflow-y-auto"
      onClick={onHide}
      role="button"
      onKeyDown={null}
      tabIndex={0}
    >
      <div
        className="m-auto outline-none focus:outline-none relative"
        onClick={e => e.stopPropagation()}
        role="button"
        onKeyDown={null}
        tabIndex={0}
      >
        <button
          className="absolute -top-7 right-0 font-primary text-sm text-gray-300 outline-none focus:outline-none"
          onClick={onHide}
        >
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onHide: PropTypes.func.isRequired,
}

export default Modal
