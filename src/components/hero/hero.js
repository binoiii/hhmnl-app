import React from "react"
import { Link } from "react-scroll"

import HeroBg from "./heroBg"

const Hero = () => {
  return (
    <div>
      <HeroBg>
        <div className="md:pt-16 flex flex-col justify-center items-center">
          <h2 className="font-primary text-white text-6xl text-shadow-lg uppercase tracking-wider">
            make the switch
          </h2>
          <div className="md:mt-6 flex font-secondary text-white text-4xl italic text-shadow-xl tracking-wider">
            <h3>eco-friendly </h3>
            <span>&nbsp; . &nbsp;</span>
            <h3>personalized</h3>
            <span>&nbsp; . &nbsp;</span>
            <h3>affordable</h3>
          </div>
          <div className="md:mt-8">
            <Link to="products" smooth duration={500}>
              <button className="md:px-20 md:py-2 text-orange-450 text-md uppercase tracking-widest border-2 border-orange-450 rounded-md outline-none focus:outline-none">
                shop now
              </button>
            </Link>
          </div>
        </div>
      </HeroBg>
    </div>
  )
}

export default Hero
