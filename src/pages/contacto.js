import React from 'react';
import PaginaContacto from '../components/contacto';

// Components
import SEO from "../components/seo"
import Layout from '../layout/layout'

const Contacto = () => {


    return ( 
        <Layout>      
            <SEO title="Contacto" />
            <PaginaContacto/>
        </Layout>
     );
}
 
export default Contacto;