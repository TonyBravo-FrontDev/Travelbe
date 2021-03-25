import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import Background from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

// Component
import Suscripcion from "../components/inicio/suscripcion"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "footer-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Suscripcion />
      <Background
        Tag={`footer`}
        className="background-footer"
        fluid={data.file.sharp.fluid}
      >
        <div className="container-footer">
          <div className="column-footer">
            <h4 className="title-footer">Area</h4>
            <p>Jalisco, México</p>
          </div>
          <div className="column-footer">
            <h4 className="travelbe-footer">Travelbe</h4>
          </div>
          <div className="column-footer">
            <h4 className="title-footer">Social</h4>
            <div className="red-social">
              <a href="#">
                <FontAwesomeIcon className="social" icon={faInstagram} />
              </a>

              <a href="#">
                <FontAwesomeIcon className="social" icon={faLinkedinIn} />
              </a>

              <a href="#">
                <FontAwesomeIcon className="social" icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </Background>
    </>
  )
}

export default Footer
