import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactContainer from "../components/contacts/contactContainer"

const CheckoutPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <ContactContainer />
    </Layout>
  )
}

export default CheckoutPage
