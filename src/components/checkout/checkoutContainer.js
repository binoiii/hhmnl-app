import React from "react"

import CheckoutForm from "./checkoutForm"
import CheckoutShipping from "./checkoutShipping"
import CheckoutPaymentMethods from "./checkoutPaymentMethods"

const CheckoutContainer = () => {
  return (
    <div className="mx-0 md:mx-16 mt-8 md:mt-28 grid md:grid-cols-2">
      <div className="px-4 col-span-1">
        <CheckoutShipping />
        <CheckoutPaymentMethods />
      </div>
      <div className="px-4 col-span-1">
        <CheckoutForm />
      </div>
    </div>
  )
}

export default CheckoutContainer
