import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "gatsby-background-image"

const BackgroundTuristico = () => {

  const data = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { id: { eq: "Paginas_2" } }) {
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
      <Background Tag="section" className="bg-paginas" fluid={background.sharp.fluid}>
        <h2>{titulo}</h2>
      </Background>
    </>
  )
}

export default BackgroundTuristico
