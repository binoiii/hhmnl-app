import React from "react"
import PropTypes from "prop-types"

import Navigation from "./navigation"
import "./styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navigation />
        <main>{children}</main>
        <footer className="w-full font-primary text-xs text-gray-300 text-center italic">
          <a href="https://www.gatsbyjs.com">@hhmnl</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
