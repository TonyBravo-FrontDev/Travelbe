import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Component
import Cards from '../secciones/cards'
import useApartados from "../../hooks/useApartados"

const Apartados = () => {
  const informacion = useApartados()

  console.log(informacion)

  return (
    <>
      <section className="apartado-secciones">
        <Link to="/paseos-turisticos">
          <div className="box-seccion">
            <Image
              className="apartado-image"
              fluid={informacion[0].imagen.sharp.fluid}
            />
            <div className="text-seccion">
              <h2>{informacion[0].opcion}</h2>
              <p>
                <span>saber más</span>
                <FontAwesomeIcon className="angle-right" icon={faAngleRight}/>
              </p>
            </div>
          </div>
        </Link>
        <Link to="/ofertas">
          <div className="box-seccion">
            <Image
              className="apartado-image"
              fluid={informacion[1].imagen.sharp.fluid}
            />
            <div className="text-seccion">
              <h2>{informacion[1].opcion}</h2>
              <p>
                <span>saber más</span>
                <FontAwesomeIcon className="angle-right" icon={faAngleRight}/>
              </p>
            </div>
          </div>
        </Link>
        <Cards informacion={informacion}/>
      </section>
    </>
  )
}

export default Apartados
