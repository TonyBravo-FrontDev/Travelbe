import React, { useState } from "react"
import Error from "../../alerts/error"
import Enviado from "../../alerts/enviado"

const Suscripcion = () => {
  const [correo, setCorreo] = useState({
    sub: "",
  })
  const [error, setError] = useState(false)
  const [send, setSend] = useState(false)

  const { sub } = correo;

  const changeSuscripcion = e => {
    setCorreo({
      ...correo,
      [e.target.name]: e.target.value,
    })
  }

  const submitSuscripcion = e => {
    e.preventDefault()

    if (sub.trim() === "") {
      setError(true)
      setSend(false)
    } else {
      document.querySelector(".form-suscripcion").reset()
      setError(false)
      setSend(true)
    }
  }

  const info = {
    texto:
      " La suscripción por correo electrónico es una oportunidad para recibir un interesante boletín de promociones y novedades de travelbe",
    holder: "Escriba su dirección de correo electronico",
    button: "Suscribirse",
  }

  return (
    <>
      <section className="suscripcion-container">
        <p>{info.texto}</p>
        <form onSubmit={submitSuscripcion} className="form-suscripcion">
          <input
            id="suscripcion"
            name="sub"
            type="email"
            onChange={changeSuscripcion}
            placeholder={info.holder}
          />
          <input id="button-sub" type="submit" value={info.button} />
        </form>
        {error ? <Error alerta="El correo es obligatorio" /> : null}
        {send ? <Enviado mensaje="Enviado exitosamente" /> : null}
      </section>
    </>
  )
}

export default Suscripcion
