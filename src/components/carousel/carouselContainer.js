import React, { useState } from "react"
import PropTypes from "prop-types"

import CarouselImage from "./carouselImage"
import CarouselNextButton from "./carouselNextButton"
import PrevNextButton from "./carouselPrevButton"
import CarouselDots from "./carouselDots"

import { useWindowEvent } from "../utilities/utilityFunctions"

const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(1)

  const totalImages = images.length

  const handleNext = () => {
    activeImage < totalImages
      ? setActiveImage(activeImage + 1)
      : setActiveImage(1)
  }

  const handlePrev = () =>
    activeImage > 1
      ? setActiveImage(activeImage - 1)
      : setActiveImage(totalImages)

  const handleSetImage = e => setActiveImage(e)

  const handleKeyDownNext = e => {
    e.preventDefault()
    const key = e.key || e.keyCode
    if (key === "ArrowRight" || key === 39)
      return activeImage < totalImages
        ? setActiveImage(activeImage + 1)
        : setActiveImage(1)
  }

  const handleKeyDownPrev = e => {
    e.preventDefault()
    const key = e.key || e.keyCode

    if (key === "ArrowLeft" || key === 37)
      return activeImage > 1
        ? setActiveImage(activeImage - 1)
        : setActiveImage(totalImages)
  }

  useWindowEvent("keydown", handleKeyDownPrev)
  useWindowEvent("keydown", handleKeyDownNext)

  let xTouchStart = 0
  let yTouchStart = 0

  const handleTouchStart = e => {
    xTouchStart = e.touches[0].clientX
    yTouchStart = e.touches[0].clientY
  }

  const handleTouchMove = e => {
    if (!xTouchStart || !yTouchStart) {
      return
    }

    const xTouchEnd = e.touches[0].clientX
    const yTouchEnd = e.touches[0].clientY

    const xDiff = xTouchStart - xTouchEnd
    const yDiff = yTouchStart - yTouchEnd

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      xDiff > 0 ? handleNext() : handlePrev()
      xTouchStart = 0
      yTouchStart = 0
    }
  }

  useWindowEvent("touchstart", handleTouchStart)
  useWindowEvent("touchmove", handleTouchMove)

  return (
    <div className="relative">
      <CarouselNextButton handleNext={handleNext} />
      <PrevNextButton handlePrev={handlePrev} />
      <CarouselDots
        activeImage={activeImage}
        handleSetImage={handleSetImage}
        images={images}
      />
      <div className="w-sm md:w-md flex">
        {images &&
          images.map((img, ind) => (
            <div
              className={`transform translate-x-full${activeImage} transition duration-300 ease-out`}
              key={ind}
            >
              <CarouselImage img={img} />
            </div>
          ))}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Carousel
