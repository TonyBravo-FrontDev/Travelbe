import React from 'react';
import Image from 'gatsby-image'

import Proptypes from 'prop-types'

const GaleriadeFotos = ({foto}) => {

    const { imagen } = foto

    return ( 
        <>
        <div className="image-container-galeria">
            <Image className="image-galery" fluid={imagen.sharp.fluid} alt="galeria"/>
        </div>
        </>
     );
}
 
export default GaleriadeFotos;

GaleriadeFotos.propTypes = {
    foto: Proptypes.object
}