import React from "react"

import ContactForm from "./contactForm"
import ContactBanner from "./contactBanner"

const ContactContainer = () => (
  <div className="mt-16 md:mt-8 mb-16 lg:mb-20 mx-4 sm:mx-8 md:mx-20 grid grid-cols-2 gap-4 md:gap-8">
    <div className="flex flex-col justify-center col-span-2 lg:col-span-1 order-2 lg:order-1">
      <h1 className="md:mb-8 md:text-4xl font-secondary text-orange-450 text-center hidden lg:block">
        Contact Us
      </h1>
      <div>
        <ContactForm />
      </div>
    </div>
    <div className="col-span-2 lg:col-span-1 order-1 lg:order-2">
      <ContactBanner />
    </div>
  </div>
)

export default ContactContainer
