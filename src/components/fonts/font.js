import React from "react"
import PropTypes from "prop-types"

const Font = ({ font, handleFontSelected }) => {
  const modifiedFont = font.replace("font-", "")

  return (
    <div
      className={`my-1 p-1 ${font} text-xs cursor-pointer`}
      onClick={() => handleFontSelected(font)}
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
