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
        <footer>
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
