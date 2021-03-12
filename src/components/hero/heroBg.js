import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const HeroBg = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      heroBg: file(relativePath: { eq: "hero/hero-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const {
    heroBg: {
      childImageSharp: { fluid },
    },
    name,
  } = data

  return (
    <div>
      <BackgroundImage className="h-md md:h-lg" alt={name} fluid={fluid}>
        {children}
      </BackgroundImage>
    </div>
  )
}

HeroBg.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroBg
