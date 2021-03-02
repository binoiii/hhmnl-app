import React from "react"
import PropTypes from "prop-types"

const Font = ({ font, handleFontSelected }) => {
  const modifiedFont = font.replace("font-", "")

  return (
    <div
      className={`my-1 p-1 ${font} text-xs outline-none focus:outline-none cursor-pointer`}
      onClick={() => handleFontSelected(font)}
      onKeyDown={() => handleFontSelected(font)}
      role="button"
      tabIndex={0}
    >
      {modifiedFont}
    </div>
  )
}

Font.propTypes = {
  font: PropTypes.string.isRequired,
  handleFontSelected: PropTypes.func.isRequired,
}

export default Font
