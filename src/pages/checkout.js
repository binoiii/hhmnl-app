import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import CheckoutContainer from "../components/checkout/checkoutContainer"

const CheckoutPage = () => {
  return (
    <Layout>
      <SEO title="Checkout" />
      <CheckoutContainer />
    </Layout>
  )
}

export default CheckoutPage
