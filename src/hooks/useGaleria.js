import { graphql, useStaticQuery } from "gatsby"

const UseGaleria = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiGalerias {
        nodes {
          id
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiGalerias.nodes.map(info => ({
      id: info.id,
      imagen: info.imagen
  }))
}

export default UseGaleria
