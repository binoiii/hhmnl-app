import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import ProductsContainer from "../components/products/productsContainer"
import Hero from "../components/hero/hero"
import FollowersContainer from "../components/sections/followersContainer"
import PartnersContainer from "../components/sections/partnersContainer"
import ReviewsContainer from "../components/sections/reviewsContainer"

const Index = () => {
  return (
    <Layout inHome={true}>
      <SEO title="Home" />
      <Hero />
      <FollowersContainer />
      <PartnersContainer />
      <ReviewsContainer />
      <ProductsContainer />
    </Layout>
  )
}
Index.propTypes = {
  inHome: PropTypes.bool,
}

export default Index
