import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"

import CarouselImage from "./carouselImage"
import { Next } from "../icons"

const Carousel = ({ images }) => {
  const settings = {
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: dots => (
      <div
        style={{
          bottom: "0px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  }

  return (
    <div className="md:w-md bg-orange-450">
      <Slider {...settings}>
        {images &&
          images.map((img, ind) => <CarouselImage key={ind} img={img} />)}
      </Slider>
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Carousel
