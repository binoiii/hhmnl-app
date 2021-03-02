import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsContainer from "../components/products/ProductsContainer"
import Hero from "../components/hero/hero"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProductsContainer />
  </Layout>
)

export default Index
