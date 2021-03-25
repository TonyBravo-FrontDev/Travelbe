import React from 'react';

// Components
import SEO from "../components/seo"
import UseGaleria from '../hooks/useGaleria';
import Layout from '../layout/layout'
import GaleriadeFotos from '../components/galeria/galeriaFotos'

const GaleriaFotos = () => {

    const fotos = UseGaleria()

    return ( 
        <Layout>      
            <SEO title="Galeria" />
            <h2 id="titulo-galeria">Galeria de Fotos</h2>
            <section className="container-galeria">
                {fotos.map(foto => (
                    <GaleriadeFotos key={foto.id} foto={foto}/>
                ))}
            </section>
        </Layout>
     );
}
 
export default GaleriaFotos;