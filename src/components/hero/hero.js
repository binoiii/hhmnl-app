import React from "react"
import { Link } from "react-scroll"
import { Fade } from "react-reveal"

import HeroBg from "./heroBg"

const Hero = () => {
  return (
    <div>
      <HeroBg>
        <div className="mt-16 md:mt-0 pt-12 md:pt-32 flex flex-col justify-center items-center">
          <Fade delay={300}>
            <h2 className="mx-4 md:mx-0 font-primary text-white text-4xl sm:text-5xl md:text-6xl text-shadow-lg uppercase text-center tracking-wider">
              make the switch
            </h2>
          </Fade>
          <div className="mt-4 md:mt-6 flex flex-row font-secondary text-white text-xl sm:text-3xl md:text-4xl font-bold md:font-normal italic text-shadow-xl tracking-wider">
            <Fade delay={600}>
              <h3 className="mb-4">eco-friendly </h3>
              <span className="">&nbsp; . &nbsp;</span>
              <h3 className="mb-4">personalized</h3>
              <span className="">&nbsp; . &nbsp;</span>
              <h3 className="mb-4">affordable</h3>
            </Fade>
          </div>
          <div className="mt-8">
            <Link to="products" smooth duration={500}>
              <Fade delay={900}>
                <button className="px-10 sm:px-16 md:px-20 py-2 text-orange-450 text-sm sm:text-base uppercase tracking-widest border-2 border-orange-450 rounded-md outline-none focus:outline-none">
                  shop now
                </button>
              </Fade>
            </Link>
          </div>
        </div>
      </HeroBg>
    </div>
  )
}

export default Hero
