import React, { useState, useEffect } from "react"
import { Fade } from "react-reveal"

const PartnerContainer = () => {
  const [partnerImg, setPartnerImg] = useState([])

  const getData = () => {
    fetch("./data/partnerClients.json")
      .then(res => {
        return res.json()
      })
      .then(res => setPartnerImg(res))
      .catch(err => console.log(err))
  }

  useEffect(() => getData(), [])

  return (
    <div className="mt-16">
      <h2 className="mb-8 text-center text-4xl font-secondary text-orange-450 ">
        Crafted with
      </h2>
      <Fade delay={1000} duration={1000}>
        <div className="mx-auto sm:mx-24 md:mx-32 grid grid-cols-3 sm:grid-cols-6 gap-8">
          {partnerImg &&
            partnerImg.length > 0 &&
            partnerImg.map(({ id, image, name }) => (
              <div className="mx-auto w-16 h-16" key={id}>
                <img alt={name} src={image} loading="lazy" />
              </div>
            ))}
        </div>
      </Fade>
    </div>
  )
}

export default PartnerContainer
