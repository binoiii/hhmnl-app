import React from "react"
import { partnerImages } from "../../data/data"

const CraftedContainer = () => {
  return (
    <div className="mt-16">
      <h2 className="mb-8 text-center text-4xl font-secondary text-orange-450 ">
        Crafted with
      </h2>
      <div className="mx-auto sm:mx-24 md:mx-32 grid grid-cols-3 sm:grid-cols-6 gap-8">
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
