import React from "react"
import ThankyouOrder from "../components/thankyouOrder.js"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const OrderTy = () => (
  <Layout>
    <SEO title="Thank for your purchase!" />
    <ThankyouOrder />
  </Layout>
)

export default OrderTy
