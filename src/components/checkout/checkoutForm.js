import React, { useState } from "react"
import { useSelector } from "react-redux"
import { navigate } from "gatsby-link"

const CheckoutForm = () => {
  const cart = JSON.stringify(useSelector(state => state.cart))

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    address: "",
    zipcode: "",
    notes: "",
    order: cart,
  })

  const handleChange = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...data }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div className="mb-16">
      <form
        name="order"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
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
                  value={data.firstname}
                  onChange={handleChange}
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
                  value={data.lastname}
                  onChange={handleChange}
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
                value={data.contact}
                onChange={handleChange}
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
                value={data.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-2 font-primary text-sm" htmlFor="zipcode">
                Zip Code
              </label>
              <input
                className="p-2 font-primary border border-gray-400 focus:ring-2 focus:ring-orange-450 outline-none focus:outline-none"
                type="text"
                name="zipcode"
                value={data.zipcode}
                onChange={handleChange}
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
              <label className="mr-2 font-primary text-sm" htmlFor="notes">
                Additional Notes
              </label>
              <input
                className="p-2 font-primary border border-gray-400 focus:ring-2 focus:ring-orange-450 outline-none focus:outline-none"
                type="text"
                name="notes"
                value={data.notes}
                onChange={handleChange}
              />
              <input className="hidden" type="text" name="order" />
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
