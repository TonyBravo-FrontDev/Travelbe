import React from "react"
import Image from "gatsby-image"
import Proptypes from 'prop-types'

const Paises = ({ pais }) => {
  const { lugar, texto, previa } = pais

  return (
    <>
      <div className="card-pais">
        <div className="container-img-card">
          <Image className="img-card" fluid={previa.sharp.fluid} alt="lugar" />
        </div>
        <div className="container-text-card">
          <h3>{lugar}</h3>
          <p>{texto}</p>
        </div>
      </div>
    </>
  )
}

export default Paises

Paises.propTypes = {
  pais: Proptypes.object.isRequired
}



