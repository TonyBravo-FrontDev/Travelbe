import React from 'react';

// Components
import SEO from "../components/seo"
import Layout from '../layout/layout'
import Lugares from '../components/localizacion/lugares';

const Localizacion = () => {


    return ( 
        <Layout>      
            <SEO title="Localizacion" />
            <Lugares/>
        </Layout>
     );
}
 
export default Localizacion;