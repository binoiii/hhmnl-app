import React from "react"

const CheckoutForm = () => {
  return (
    <div className="mb-16">
      <form>
        <div>
          <h4 className="mb-4 font-primary text-lg text-orange-450 font-medium tracking-wide">
            Contact Information
          </h4>
          <div className="ml-0 md:ml-4 mb-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:mr-4 mb-4 min-w-0 flex flex-col flex-1">
                <label
                  className="mr-2 font-primary text-sm"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className="p-2 font-primary border border-gray-400 focus:ring-2 focus:ring-orange-450 outline-none focus:outline-none"
                  type="text"
                  name="firstname"
                  required
                />
              </div>
              <div className="mb-4 md:mb-0 flex min-w-0 flex-col flex-1">
                <label className="mr-2 font-primary text-sm" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  className="p-2 font-primary border border-gray-400 focus:ring-2 focus:ring-orange-450 outline-none focus:outline-none"
                  type="text"
                  name="lastname"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mr-2 font-primary text-sm" htmlFor="contact">
                Contact Number
              </label>
              <input
                className="p-2 font-primary border border-gray-400 focus:ring-2 focus:ring-orange-450 outline-none focus:outline-none"
                type="text"
                name="contact"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-primary text-lg text-orange-450 font-medium tracking-wide">
            Shipping Information
          </h4>
          <div className="ml-0 md:ml-4 mb-4">
            <div className="mb-4 flex flex-col">
              <label className="mr-2 font-primary text-sm" htmlFor="address">
                Full Address
              </label>
              <input
                className="p-2 font-primary border border-gray-400 focus:ring-2 focus:ring-orange-450 outline-none focus:outline-none"
                type="text"
                name="address"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-2 font-primary text-sm" htmlFor="street">
                Zip Code
              </label>
              <input
                className="p-2 font-primary border border-gray-400 focus:ring-2 focus:ring-orange-450 outline-none focus:outline-none"
                type="text"
                name="street"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-primary text-lg text-orange-450 font-medium tracking-wide">
            Order Notes
          </h4>
          <div className="ml-0 md:ml-4 mb-4">
            <div className="mb-8 flex flex-col">
              <label className="mr-2 font-primary text-sm" htmlFor="address">
                Additional Notes
              </label>
              <input
                className="p-2 font-primary border border-gray-400 focus:ring-2 focus:ring-orange-450 outline-none focus:outline-none"
                type="text"
                name="address"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-4 flex justify-center">
          <button
            className="mx-auto py-4 w-48 bg-orange-450 font-primary text-xs text-white uppercase text-center tracking-wider outline-none focus:outline-none cursor-pointer"
            type="submit"
          >
            Submit Order
          </button>
        </div>
        <div className="sm:pb-8 md:pb-0 font-primary text-xs text-gray-600 text-center italic">
          <ul>
            <li>
              <span className="text-orange-450">*</span>We will contact you for
              the payment details once your order has been validated.
            </li>
            <li>
              <span className="text-orange-450">*</span>Rest assured, your
              orders are efficiently and safetly shipped by our partner
              couriers.
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
