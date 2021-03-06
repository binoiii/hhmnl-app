import React from "react"
import PropTypes from "prop-types"

import Navigation from "./navigation"
import CartContainer from "./cart/cartContainer"
import SocialLinks from "./socialLinks"
import Footer from "./footer"

import "./styles/global.css"

const Layout = ({ children, inHome }) => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl flex flex-col relative">
      <Navigation inHome={inHome} />
      <CartContainer inHome={inHome} />
      <SocialLinks />
      <div className="flex-grow">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  inHome: PropTypes.bool,
}

export default Layout
