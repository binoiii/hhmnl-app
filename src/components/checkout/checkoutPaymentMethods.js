import React from "react"

const CheckoutPaymentMethods = () => {
  const methods = [
    {
      method: "gcash",
      img: "http://localhost:8000/images/payment/gcash.jpg",
    },
    {
      method: "bpi",
      img: "http://localhost:8000/images/payment/bpi.jpg",
    },
    {
      method: "bdo",
      img: "http://localhost:8000/images/payment/bdo.jpg",
    },
    {
      method: "palawan",
      img: "http://localhost:8000/images/payment/palawan.jpg",
    },
    {
      method: "wu",
      img: "http://localhost:8000/images/payment/wu.jpg",
    },
    {
      method: "cebuana",
      img: "http://localhost:8000/images/payment/cebuana.jpg",
    },
  ]

  return (
    <div className="mb-16 md:mb-0">
      <h4 className="mb-4 font-primary text-lg text-orange-450 font-medium tracking-wide text-center">
        Payment Methods
      </h4>
      <div className="grid grid-cols-3 grid-rows-2 grid-flow-col gap-2">
        {methods &&
          methods.map(({ method, img }) => (
            <div key={method} className="mx-auto w-16">
              <img alt={method} src={img} loading="lazy" />
            </div>
          ))}
      </div>
    </div>
  )
}

export default CheckoutPaymentMethods
