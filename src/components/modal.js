import React from "react"
import PropTypes from "prop-types"
import ScrollLock, { TouchScrollable } from "react-scrolllock"

import { useWindowEvent } from "./utilities/utilityFunctions"

const Modal = ({ children, onHide }) => {
  const hideOnEscapeKeyDown = e => {
    const key = e.key || e.keyCode

    if (key === "Escape" || key === 27) return onHide()
  }

  useWindowEvent("keydown", hideOnEscapeKeyDown)

  return (
    <ScrollLock>
      <div
        className="flex justify-center items-center h-full w-full fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 outline-none focus:outline-none overflow-y-auto"
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
          <TouchScrollable>
            <div>{children}</div>
          </TouchScrollable>
        </div>
      </div>
    </ScrollLock>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onHide: PropTypes.func.isRequired,
}

export default Modal
