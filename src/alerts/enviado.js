import React from 'react';
import Proptypes from 'prop-types'

const Enviado = ({mensaje}) => {
    return ( 
        <>
            <p id="enviado">{mensaje}</p>
        </>
     );
}
 
export default Enviado;

Enviado.propTypes = {
    mensaje: Proptypes.string
}