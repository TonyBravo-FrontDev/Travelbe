import { graphql, useStaticQuery } from "gatsby"

const UsePaises = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPaseos {
        nodes {
          id
          lugar
          texto
          previa {
            sharp: childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiPaseos.nodes.map(datos => ({
    id: datos.id,
    lugar: datos.lugar,
    texto: datos.texto,
    previa: datos.previa
  }));
}

export default UsePaises
