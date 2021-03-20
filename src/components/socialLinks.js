import React from "react"
import { Link } from "gatsby"

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
      link: "https://www.facebook.com/happyhandsmnl",
    },
    {
      social: "instagram",
      icon: (
        <Ig
          className="text-orange-450 transform hover:scale-125 transition duration-300 ease-out "
          size="1.6rem"
        />
      ),
      link: "https://www.instagram.com/happyhandsmnl",
    },
  ]

  return (
    <div className="md:ml-4 px-4 sm:px-8 md:px-0 h-16 md:max-w-max md:h-auto flex items-center justify-between bg-white md:bg-transparent border-b border-gray-300 md:border-0 fixed top-0 left-0 right-0  md:fixed md:top-1/2 md:transform md:-translate-y-1/2 z-40">
      <div className="mt-1 md:ml-0 block md:hidden">
        <Link to="/">
          <h2 className="font-secondary text-3xl text-orange-450 italic">
            hhmnl
          </h2>
        </Link>
      </div>
      <div className="flex md:flex-col justify-center items-center">
        {socials.map(({ social, icon, link }) => (
          <div key={social} className="ml-10 sm:ml-14 md:ml-0 md:mb-8">
            <a href={link} rel="noopener noreferrer" target="_blank">
              {icon}
            </a>
          </div>
        ))}
        <div className="mr-2 md:mr-0">
          <CartIcon
            className="ml-10 sm:ml-14 md:ml-0 mt-1.5 md:mt-0 text-orange-450 transform hover:scale-125 transition duration-300 ease-out"
            size="1.6rem"
          />
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
