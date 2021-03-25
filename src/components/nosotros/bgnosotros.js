import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const BackgroundNosotros = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { id: { eq: "Paginas_4" } }) {
        nodes {
          titulo
          background {
            sharp: childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const { titulo, background } = data.allStrapiPaginas.nodes[0]

  return (
    <>
      <BackgroundImage className="bg-paginas" Tag="main" fluid={background.sharp.fluid}>
            <h2>{titulo}</h2>
      </BackgroundImage>
    </>
  )
}

export default BackgroundNosotros
