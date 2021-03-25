import React from "react"
import Proptypes from 'prop-types'

const Error = ({ alerta }) => {
  return (
    <>
      <p id="error">{alerta}</p>
    </>
  )
}

export default Error

Error.propType = {
    alerta: Proptypes.string
}
