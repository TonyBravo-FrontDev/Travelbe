import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"

const ContenidoNosotros = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiNosotros {
        nodes {
          historia
        }
      }
    }
  `)

  const { historia } = data.allStrapiNosotros.nodes[0]

  return (
    <section className="container-nosotros">
      <div className="content-nosotros">
        <p>{historia}</p>
        <Link className="botton-loc" to="/localizacion">
          <span>Localización</span>
          <FontAwesomeIcon icon={faMapMarkerAlt} id="icon-map"/>
        </Link>
      </div>
    </section>
  )
}

export default ContenidoNosotros
