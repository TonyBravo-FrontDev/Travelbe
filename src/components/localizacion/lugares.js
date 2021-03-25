import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Lugares = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiLocalitations {
        nodes {
          pais
          ciudad
          calle
          celular
          correo
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const { nodes } = data.allStrapiLocalitations

  return (
    <>
      <div className="content-localitation one">
        <div className="content-section-localitation">
          <div className="content-text-localitation">
            <h6>{nodes[0].pais}</h6>
            <div className="row-localitation">
              <div className="content-street">
                <p className="p-text">{nodes[0].ciudad}</p>
                <p>{nodes[0].calle}</p>
              </div>
              <div className="content-street">
                <p className="p-text">Contacto</p>
                <p>{nodes[0].celular}</p>
                <p>{nodes[0].correo}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-localitation">
          <Image className="image-loc" fluid={nodes[0].imagen.sharp.fluid} alt="imagen pais" />
        </div>
      </div>
      <div className="content-localitation two">
        <div className="content-section-localitation">
          <div className="content-text-localitation">
            <h6>{nodes[1].pais}</h6>
            <div className="row-localitation">
              <div className="content-street">
                <p className="p-text">{nodes[1].ciudad}</p>
                <p>{nodes[1].calle}</p>
              </div>
              <div className="content-street">
                <p className="p-text">Contacto</p>
                <p>{nodes[1].celular}</p>
                <p>{nodes[1].correo}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-localitation">
          <Image className="image-loc" fluid={nodes[1].imagen.sharp.fluid} alt="imagen pais" />
        </div>
      </div>
      <div className="content-localitation three">
        <div className="content-section-localitation">
          <div className="content-text-localitation">
            <h6>{nodes[2].pais}</h6>
            <div className="row-localitation">
              <div className="content-street">
                <p className="p-text">{nodes[2].ciudad}</p>
                <p>{nodes[2].calle}</p>
              </div>
              <div className="content-street">
                <p className="p-text">Contacto</p>
                <p>{nodes[2].celular}</p>
                <p>{nodes[2].correo}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-localitation">
          <Image className="image-loc" fluid={nodes[2].imagen.sharp.fluid} alt="imagen pais" />
        </div>
      </div>
    </>
  )
}

export default Lugares
