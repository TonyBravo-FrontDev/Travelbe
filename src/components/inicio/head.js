import React from "react"
import { Link } from "gatsby"
import Background from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { id: { eq: "Paginas_1" } }) {
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
        <Background
          Tag="main"
          fluid={background.sharp.fluid}
          className="background-main"
        >
          <div className="container-main">
            <div className="col-1">
              <h1 className="title-main">{titulo}</h1>
            </div>
            <div className="col-2">
              <Link className="boton-main" to="/">Leer más</Link>
            </div>
          </div>
        </Background>
    </>
  )
}

export default Head
