import React from "react"

// Components
import Paises from "../components/turistico/paises"
import Layout from "../layout/layout"
import Cards from "../components/secciones/cards"
import SEO from "../components/seo"
import BackgroundTuristico from "../components/turistico/bgturistico"

// Hooks
import UsePaises from "../hooks/usePaises"
import UseApartados from "../hooks/useApartados"

const PaseosTuristicos = () => {
  const datos = UsePaises()
  const informacion = UseApartados()

  return (
    <Layout>
      <SEO title="Paseos Turisticos" />
      <BackgroundTuristico />
      <section className="container-cards">
        {datos.map(pais => (
          <Paises key={pais.id} pais={pais} />
        ))}
      </section>
      <section className="card-section-link">
        <Cards informacion={informacion} />
      </section>
    </Layout>
  )
}

export default PaseosTuristicos
