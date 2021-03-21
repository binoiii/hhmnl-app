import React from "react"
import { partnerImages } from "../../data/data"

const CraftedContainer = () => {
  return (
    <div>
      <h2 className="my-16 text-center text-4xl font-secondary text-orange-450 ">
        Crafted with
      </h2>
      <div>
        {partnerImages &&
          partnerImages.map(({ id, image, name }) => (
            <div key={id}>
              <img alt={name} src={image} loading="lazy" />
            </div>
          ))}
        )=
      </div>
    </div>
  )
}

export default CraftedContainer
