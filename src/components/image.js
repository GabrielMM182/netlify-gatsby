import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "capa.png"}) {
            childImageSharp {
              fluid(maxWidth: 300 maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
  )

  export default Image