import React, { useState } from "react"
import Error from '../alerts/error'
import Enviado from '../alerts/enviado'
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const PaginaContacto = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    celular: "",
    mensaje: "",
  })
  const [error, setError] = useState(false)
  const [send, setSend] = useState(false)

  const { nombre, correo, celular, mensaje } = datos

  const changeForm = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      celular.trim() === "" ||
      mensaje.trim() === ""
    ) {
      setError(true)
      setSend(false)
    } else {
      document.querySelector('#formulario').reset()
      setError(false)
      setSend(true)
    }
  }

  const data = useStaticQuery(graphql`
    query {
      allStrapiContacto {
        nodes {
          titulo
          descripcion
          imagen {
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

  const { titulo, descripcion, imagen } = data.allStrapiContacto.nodes[0]

  return (
    <>
      <BackgroundImage
        className="container-contacto"
        fluid={imagen.sharp.fluid}
      >
        <div className="container-text-contact">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
        <div className="container-formulario">
          <form onSubmit={handleSubmit} id="formulario">
            <input
              onChange={changeForm}
              className="input-form"
              name="nombre"
              type="text"
              placeholder="Nombre"
            />
            <input
              onChange={changeForm}
              className="input-form"
              name="correo"
              type="email"
              placeholder="Correo electronico"
            />
            <input
              onChange={changeForm}
              className="input-form"
              name="celular"
              type="number"
              placeholder="Celular"
            />
            <textarea
              onChange={changeForm}
              name="mensaje"
              className="text-area"
              placeholder="Mensaje"
            ></textarea>
            { error ? <Error alerta="Los campos son obligatorios"/> : null }
            { send ? <Enviado mensaje="El formulario se envio correctamente"/> : null}
            <input id="enviar" type="submit" value="Enviar" />
          </form>
        </div>
      </BackgroundImage>
    </>
  )
}

export default PaginaContacto
