import React from "react"

import { Fb2, Ig2, Like, User } from "../../components/icons"

const ReviewsContainer = () => {
  return (
    <div className="mx-auto sm:mx-24 md:mx-32 mt-16">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="m-8 sm:w-80 flex items-center">
          <Fb2 className="mr-2 md:mr-4 text-orange-450" size="4rem" />
          <div className="font-primary text-gray-700 text-2xl md:text-3xl break-words">
            <span className="font-bold">11k</span> and counting{" "}
            <div className="flex">
              <span className="font-bold">Facebook</span>
              <Like className="ml-2 text-gray-700" />
            </div>
          </div>
        </div>
        <div className="m-8 sm:w-80 flex justify-center sm:justify-end items-center">
          <div className="font-primary text-gray-700 text-2xl md:text-3xl break-wors text-right">
            <span className="font-bold">4k</span> and counting
            <div className="flex items-center justify-end">
              <span className="font-bold">Instagram</span>
              <User className="ml-2 text-gray-700" />
            </div>
          </div>
          <Ig2 className="ml-2 md:ml-4 text-orange-450" size="5rem" />
        </div>
      </div>
    </div>
  )
}

export default ReviewsContainer
