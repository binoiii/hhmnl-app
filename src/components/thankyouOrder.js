import React from "react"
import { Link } from "gatsby"

const ThankyouOrder = () => (
  <div className="mt-16 md:mt-0 flex flex-col items-center p-16 sm:p-20 md:p-32">
    <h1 className="text-center font-secondary text-5xl text-orange-450 tracking-wide">
      Thank you for your purchase !
    </h1>
    <p className="my-8 text-center font-primary">
      Your purchase order reference is: 888
    </p>
    <Link to="/">
      <button className="py-4 w-48 bg-orange-450 font-primary text-xs text-white uppercase text-center tracking-wider outline-none focus:outline-none cursor-pointer">
        Back to home
      </button>
    </Link>
  </div>
)

export default ThankyouOrder
