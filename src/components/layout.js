import React from "react"
import PropTypes from "prop-types"

import Navigation from "./navigation"
import CartContainer from "./cart/cartContainer"
import SocialLinks from "./socialLinks"
import Footer from "./footer"

import "./styles/global.css"

const Layout = ({ children, inHome }) => {
  return (
    <>
      <div>
        <Navigation />
        <CartContainer inHome={inHome} />
        <SocialLinks />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  inHome: PropTypes.bool,
}

export default Layout
