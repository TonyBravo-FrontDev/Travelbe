import React from "react"

// Components
import SEO from "../components/seo"
import Layout from "../layout/layout"
import Head from "../components/inicio/head"
import Apartados from "../components/inicio/apartados"
import SeccionVideo from "../components/inicio/video"

const Inicio = () => {


  return (
  <Layout>
    <SEO title="Inicio" />
    <Head />
    <Apartados />
    <SeccionVideo/>
  </Layout>
  )
}

export default Inicio
