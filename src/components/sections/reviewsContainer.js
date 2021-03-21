import React from "react"

import { reviews } from "../../data/data"
import { Stars, Fb } from "../../components/icons"

const ReviewsContainer = () => {
  return (
    <div className="mx-24 my-32">
      <h2 className="mb-16 text-center text-4xl font-secondary text-orange-450 ">
        Client Reviews
      </h2>
      <div className="flex flex-wrap">
        {reviews &&
          reviews.map(({ client, review, image }) => (
            <a
              className="m-2 p-4 w-52 flex-grow flex flex-col block items-center"
              href="https://www.facebook.com/happyhandsmnl/reviews"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="mb-4 w-16 h-16 rounded-full"
                alt={client}
                src={image}
                loading="lazy"
              />
              <div className="mx-auto mb-4">
                <h3 className="text-center font-primary font-bold">{client}</h3>
                <Stars className="text-yellow-300" />
              </div>
              <p className="mb-4 text-center font-primary text-sm">{review}</p>
              <Fb className="text-2xl text-blue-350" />
            </a>
          ))}
      </div>
    </div>
  )
}

export default ReviewsContainer
