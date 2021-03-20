import React from "react"
import NotFoundPage from "../components/404.js"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const NotFound = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundPage />
  </Layout>
)

export default NotFound
