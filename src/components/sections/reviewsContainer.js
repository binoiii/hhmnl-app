import React from "react"
import { reviews } from "../../data/data"

const ReviewsContainer = () => {
  return (
    <div className="my-32">
      <h2 className="mb-16 text-center text-4xl font-secondary text-orange-450 ">
        Client Reviews
      </h2>
      <div>
        {reviews &&
          reviews.map(({ client, reviews, image }) => (
            <div>
              <img alt={client} src={image} loading="eager" />
              <p>{reviews}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ReviewsContainer
