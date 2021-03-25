import React from 'react';
import BackgroundNosotros from '../components/nosotros/bgnosotros';
import ContenidoNosotros from '../components/nosotros/contentnosotros';

// Components
import SEO from "../components/seo"
import Layout from '../layout/layout'

const Nosotros = () => {


    return ( 
        <Layout>      
            <SEO title="Nosotros" />
            <BackgroundNosotros/>
            <ContenidoNosotros/>
        </Layout>
     );
}
 
export default Nosotros;