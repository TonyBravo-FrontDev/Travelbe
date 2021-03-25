import React from "react"
import BackgroundOfertas from "../components/ofertas/bgofertas"
import DescripcionOferta from "../components/ofertas/descripcion"
import SEO from "../components/seo"
import Layout from "../layout/layout"
import Cards from "../components/secciones/cards"
import UseApartados from "../hooks/useApartados"

const Ofertas = () => {
  const informacion = UseApartados()

  return (
    <Layout>
      <SEO title="Ofertas" />
      <BackgroundOfertas />
      <DescripcionOferta />
      <section className="card-section-link">
        <Cards informacion={informacion} />
      </section>
    </Layout>
  )
}

export default Ofertas
