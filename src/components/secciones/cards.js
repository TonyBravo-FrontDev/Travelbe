import React from "react"
import Image from "gatsby-image"
import Proptypes from 'prop-types'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Cards = ({ informacion }) => {
  return (
    <>
      <Link to="/galeria-de-fotos">
        <div className="box-seccion">
          <Image
            className="apartado-image"
            fluid={informacion[2].imagen.sharp.fluid}
          />
          <div className="text-seccion">
            <h2>{informacion[2].opcion}</h2>
            <p>
              <span>saber más</span>
              <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
            </p>
          </div>
        </div>
      </Link>
      <Link to="/localizacion">
        <div className="box-seccion">
          <Image
            className="apartado-image"
            fluid={informacion[3].imagen.sharp.fluid}
          />
          <div className="text-seccion">
            <h2>{informacion[3].opcion}</h2>
            <p>
              <span>saber más</span>
              <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Cards

Cards.propTypes = {
  informacion: Proptypes.object.isRequired
}
