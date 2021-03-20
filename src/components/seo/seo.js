import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Fb from "./fb"
import Twitter from "./twitter"

function SEO({ title, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            description
            author
            url
            image
          }
        }
      }
    `
  )

  const { defaultTitle, description, author, url, image } = site.siteMetadata

  const seo = {
    url,
    title: title || defaultTitle,
    titleTemplate: `%s | ${defaultTitle}`,
    description: `${description}`,
    image: `${url}${image}`,
    author,
  }
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={seo.title}
        titleTemplate={seo.titleTemplate}
      >
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>
      <Fb
        url={seo.url}
        title={seo.title}
        description={seo.description}
        image={seo.image}
      />
      <Twitter
        url={seo.url}
        title={seo.title}
        description={seo.description}
        image={seo.image}
      />
    </>
  )
}

SEO.defaultProps = {
  title: "",
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
