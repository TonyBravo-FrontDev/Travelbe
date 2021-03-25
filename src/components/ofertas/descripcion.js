import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

// Hook
import UseBackgroundOferta from "../../hooks/useBackgroundOferta"

const DescripcionOferta = () => {
  const background = UseBackgroundOferta()

  const data = useStaticQuery(graphql`
    query {
      allStrapiSeccion {
        nodes {
          titulo
          descripcion
          bgsection {
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

  const { titulo, descripcion, bgsection } = data.allStrapiSeccion.nodes[0]
  
  return (
    <>
      <BackgroundImage
        className="bg-section-oferta"
        Tag="section"
        fluid={bgsection.sharp.fluid}
      >
        <div className="content-section-oferta">
          <h5>Grecia</h5>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
      </BackgroundImage>

      <BackgroundImage
        Tag="section"
        className="bg-ofertas"
        fluid={background.file.sharp.fluid}
      >
        <h3>Viaja sin complicaciones</h3>
      </BackgroundImage>
    </>
  )
}

export default DescripcionOferta
