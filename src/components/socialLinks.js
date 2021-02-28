import React from "react"

import CartIcon from "./utilities/cartIcon"

import { Fb, Ig } from "./icons"

const SocialLinks = () => {
  const socials = [
    {
      social: "facebook",
      icon: (
        <Fb
          className="text-orange-450 transform hover:scale-125 transition duration-300 ease-out "
          size="1.6rem"
        />
      ),
      link: "https://www.facebook.com/Pet-Find-PH-103012528511317",
    },
    {
      social: "instagram",
      icon: (
        <Ig
          className="text-orange-450 transform hover:scale-125 transition duration-300 ease-out "
          size="1.6rem"
        />
      ),
      link: "https://www.instagram.com",
    },
  ]

  return (
    <div className="md:ml-4 md:fixed md:top-1/2 md:transform md:-translate-y-1/2 z-40">
      {/* <div className="mt-1 md:ml-0 block md:hidden">
        <Img alt={fixed.originalName} fixed={fixed} />
      </div> */}
      <div className="flex flex-col justify-center">
        {socials.map(({ social, icon, link }) => (
          <div key={social} className="mb-8">
            <a href={link} rel="noopener noreferrer" target="_blank">
              {icon}
            </a>
          </div>
        ))}
        <div>
          <CartIcon
            className="text-orange-450 transform hover:scale-125 transition duration-300 ease-out"
            size="1.6rem"
          />
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
