import { graphql, useStaticQuery } from "gatsby"

const UseApartados = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiApartados {
        nodes {
          id
          opcion
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiApartados.nodes.map(datos => ({
    opcion: datos.opcion,
    imagen: datos.imagen,
  }))
}

export default UseApartados
