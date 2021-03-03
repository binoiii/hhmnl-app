import React from "react"
import { Link } from "gatsby"

import { Home, UserIcon, ShoppingCart, Email } from "./icons"

const Nav = () => {
  return (
    <div className="flex items-center fixed bottom-0 left-0 right-0 md:static h-20 border-t border-gray-400 bg-white md:border-t-0 md:border-b z-10">
      <header className="mx-4 sm:mx-8 md:mx-12 w-full flex justify-between items-center">
        <div className="hidden md:block">
          <Link to="/">
            <h1 className="font-secondary text-3xl text-orange-450 italic">
              happyhandsmnl
            </h1>
          </Link>
        </div>
        <nav>
          <div className="flex">
            <Link
              className="flex items-center text-gray-500 transition duration-300 ease-out hover:text-orange-450"
              activeClassName="text-orange-450"
              to="/"
            >
              <Home className="mr-1 mb-.5" size="1.5rem" />
              <span className="font-primary text-sm tracking-wide hidden md:block">
                Home
              </span>
            </Link>
            <Link
              className="ml-10 sm:ml-14 md:ml-12 flex items-center text-gray-500 transition duration-300 ease-out hover:text-orange-450"
              activeClassName="font-primary text-orange-450"
              to="/about"
            >
              <UserIcon className="mr-2" size="1.4rem" />
              <span className="font-primary text-sm tracking-wide hidden md:block">
                About
              </span>
            </Link>
            <Link
              className="ml-10 sm:ml-14 md:ml-12 flex items-center text-gray-500 transition duration-300 ease-out hover:text-orange-450"
              activeClassName="text-orange-450"
              to="/contact"
            >
              <Email className="mr-2" size="1.4rem" />
              <span className="font-primary text-sm tracking-wide hidden md:block">
                Contact
              </span>
            </Link>
            <Link
              className="ml-10 sm:ml-14 md:ml-12 md:ml-18 flex items-center text-gray-500 transition duration-300 ease-out hover:text-orange-450"
              activeClassName="font-primary text-orange-450"
              to="/"
            >
              <ShoppingCart className="mr-2" size="1.4rem" />
              <span className="font-primary text-sm tracking-wide hidden md:block">
                Cart
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
