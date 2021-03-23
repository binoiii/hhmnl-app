import React, { useEffect, useState } from "react"

import { Stars, Fb } from "../../components/icons"

const ReviewsContainer = () => {
  const [reviews, setReviews] = useState([])

  const getData = () => {
    fetch("./data/reviews.json")
      .then(res => res.json())
      .then(res => setReviews(res))
      .catch(err => console.log("Request failed", err))
  }

  useEffect(() => getData(), [])

  return (
    <div className="mt-32">
      <h2 className="mb-8 text-center text-4xl font-secondary text-orange-450">
        Client Reviews
      </h2>
      <div className="px-8 flex flex-wrap">
        {reviews &&
          reviews.length > 0 &&
          reviews.map(({ client, review, image }) => (
            <a
              className="m-2 px-4 py-8 w-52 flex-grow flex flex-col block items-center border border-gray-300 bg-orange-450 bg-opacity-10"
              key={client}
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
              <p className="mb-4 text-center font-primary text-sm tracking-wide">
                {review}
              </p>
              <Fb className="text-2xl text-blue-350" />
            </a>
          ))}
      </div>
    </div>
  )
}

export default ReviewsContainer
