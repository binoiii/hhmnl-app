import React, { useState } from "react"
import PropTypes from "prop-types"

import CarouselImage from "./carouselImage"
import CarouselNextButton from "./carouselNextButton"
import PrevNextButton from "./carouselPrevButton"
import CarouselDots from "./carouselDots"

const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(1)

  const totalImages = images.length

  const handleNext = () =>
    activeImage < totalImages
      ? setActiveImage(activeImage + 1)
      : setActiveImage(1)

  const handlePrev = () =>
    activeImage > 1
      ? setActiveImage(activeImage - 1)
      : setActiveImage(totalImages)

  const handleSetImage = e => setActiveImage(e)

  return (
    <div className="relative">
      <CarouselNextButton handleNext={handleNext} />
      <PrevNextButton handlePrev={handlePrev} />
      <CarouselDots
        activeImage={activeImage}
        handleSetImage={handleSetImage}
        images={images}
      />
      <div className="w-md flex overflow-hidden">
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
