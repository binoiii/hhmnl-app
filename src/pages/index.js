import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products/products"
import Hero from "../components/hero/hero"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Products />
  </Layout>
)

export default Index
