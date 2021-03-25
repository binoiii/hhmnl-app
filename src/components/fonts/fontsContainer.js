import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { updateDetails } from "../../redux/order/orderActions"

import { DropDown } from "../icons"
import Fonts from "./fonts"
import Font from "./font"

import { useEnableScroll } from "../utilities/utilityFunctions"

const FontsContainer = ({
  productName,
  engraveID,
  engraveName,
  font,
  updateDetails,
}) => {
  const fonts = [
    "font-Bernadette",
    "font-riztteen",
    "font-BEBAS NEUE",
    "font-Damion",
    "font-Citrica",
    "font-MOON",
    "font-BacktoBlack",
    "font-Uranos",
    "font-Blassville",
    "font-Heart",
    "font-Julietta",
    "font-Hughs",
    "font-Chasing Hearts",
    "font-Edwardian",
    "font-Spring is Coming",
    "font-Starfish",
    "font-OldEnglish",
    "font-Mason",
    "font-Geizer",
    "font-Nourdilla",
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [fontSelected, setFontSelected] = useState(font)

  const modifiedFont = fontSelected.replace("font-", "")

  const updateDetail = {
    productName,
    engraveID,
    engraveName,
    fontSelected,
  }

  useEffect(() => {
    updateDetails(updateDetail)
  }, [updateDetails, updateDetail])

  const handleOpen = () => setIsOpen(!isOpen)
  const handleFontSelected = font => {
    setFontSelected(font)
  }

  const fontsRef = useRef(null)

  useEnableScroll(fontsRef)

  return (
    <button
      ref={fontsRef}
      className="p-2 flex justify-center items-cemter h-8 w-36 font-primary border outline-none focus:outline-none relative"
      onClick={handleOpen}
    >
      {(fontSelected && <div className="text-xs">{modifiedFont}</div>) || (
        <>
          <div className="ml-1 text-xs text-gray-400">Select Font</div>
          <DropDown className="ml-1.5 text-xs text-gray-400 self-center" />
        </>
      )}
      {isOpen && (
        <Fonts handleOpen={handleOpen}>
          {fonts &&
            fonts.map(font => (
              <Font
                key={font}
                font={font}
                handleFontSelected={handleFontSelected}
              />
            ))}
        </Fonts>
      )}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  updateDetails: updateDetail => dispatch(updateDetails(updateDetail)),
})

FontsContainer.propTypes = {
  productName: PropTypes.string.isRequired,
  engraveID: PropTypes.string.isRequired,
  engraveName: PropTypes.string,
}

export default connect(null, mapDispatchToProps)(FontsContainer)
