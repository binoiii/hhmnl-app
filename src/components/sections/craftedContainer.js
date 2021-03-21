import React from "react"
import { partnerImages } from "../../data/data"

const CraftedContainer = () => {
  return (
    <div>
      <h2 className="my-16 text-center text-4xl font-secondary text-orange-450 ">
        Crafted with
      </h2>
      <div className="mx-14 sm:mx-24 md:mx-32 grid grid-cols-3 sm:grid-cols-6 gap-8">
        {partnerImages &&
          partnerImages.map(({ id, image, name }) => (
            <div className="mx-auto w-16 h-16" key={id}>
              <img alt={name} src={image} loading="lazy" />
            </div>
          ))}
      </div>
    </div>
  )
}

export default CraftedContainer
