import React from "react"

const CheckoutShipping = () => {
  return (
    <div className="mt-16 md:mt-0 mb-16">
      <h4 className="mb-4 font-primary text-lg text-orange-450 font-medium tracking-wide text-center">
        Shipping Reminders
      </h4>
      <div className="mb-8 text-sm text-center tracking-wide">
        <h5 className="mb-2 font-primary text-orange-450 font-medium">
          Metro Manila
        </h5>
        <p className="mb-1 font-primary">
          ₱50 - Small &nbsp;|&nbsp; ₱55 - Medium &nbsp;|&nbsp; ₱70 - Large
        </p>
        <p className="font-primary">2 - 3 days (MCFA Express)</p>
      </div>
      <div className="mb-8 text-sm text-center tracking-wide">
        <h5 className="mb-2 font-primary text-orange-450 font-medium">
          Cavite / Laguna / Rizal / Bulacan (Selected Areas)
        </h5>
        <p className="mb-1 font-primary">
          ₱50 - Small &nbsp;|&nbsp; ₱55 - Medium &nbsp;|&nbsp; ₱70 - Large
        </p>
        <p className="font-primary">2 - 4 days (MCFA Express)</p>
      </div>
      <div className="mb-8 text-sm text-center tracking-wide">
        <h5 className="mb-2 font-primary text-orange-450 font-medium">
          Provincial
        </h5>
        <p className="mb-1 font-primary">Delivers via LBC</p>
        <p className="font-primary">₱95 (Cash on Pick-Up)</p>
      </div>
      <div className="mb-8 text-sm text-center tracking-wide">
        <h5 className="mb-2 font-primary text-orange-450 font-medium">
          Order Lead Time
        </h5>
        <p className="font-primary">1 week</p>
      </div>
      <div className="text-sm text-center tracking-wide">
        <h5 className="mb-2 font-primary text-xs text-gray-600 italic">
          <span className="text-orange-450">*</span>Express shipping is via Grab
          or other couriers.
        </h5>
      </div>
    </div>
  )
}

export default CheckoutShipping
