import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ContactBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-us.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const contactImage = data.file.childImageSharp.fluid

  return (
    <div className="mt-4 sm:mt-8 md:mt-0 overflow-hidden">
      <BackgroundImage
        alt={contactImage.originalName}
        fluid={contactImage}
        className="h-xs sm:h-sm md:h-md flex overflow-hidden"
      >
        <div className="mx-auto md:p-16 h-full flex flex-col justify-center font-secondary text-orange-450 text-center">
          <div className="p-4 w-max-w bg-white">
            <h4 className="m-4 md:m-8 text-3xl sm:text-4xl tracking-wide">
              Happy to answer your questions
            </h4>
            <h4 className="m-4 md:my-8 text-sm sm:text-base font-primary">
              We'll be in touch as soon as possible
            </h4>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default ContactBanner
