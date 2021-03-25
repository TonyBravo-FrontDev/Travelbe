import { graphql, useStaticQuery } from "gatsby"

const UseBackgroundOferta = () => {
  const bg = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background-section-oferta.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return bg;
}

export default UseBackgroundOferta
