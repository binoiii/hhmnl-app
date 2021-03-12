import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsContainer from "../components/products/productsContainer"
import Hero from "../components/hero/hero"

const Index = () => {
  return (
    <Layout inHome={true}>
      <SEO title="Home" />
      <Hero />
      {/* <ProductsContainer /> */}
    </Layout>
  )
}
Index.propTypes = {
  inHome: PropTypes.bool,
}

export default Index
