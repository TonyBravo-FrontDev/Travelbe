import React from "react"
import preview from '../../images/preview-video.jpg'
import { graphql, useStaticQuery } from "gatsby"

const SeccionVideo = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiVideo {
        nodes {
          titulo
          descripcion
          bgvideo {
            publicURL
          }
        }
      }
    }
  `)

  const { titulo, descripcion , bgvideo } = data.allStrapiVideo.nodes[0];

  return (
    <>
      <section className="container-seccion-video">
        <div className="text-container-video">
            <h2>{titulo}</h2>
            <p>{descripcion}.</p>
        </div>
        <div className="container-video">
          <video id="video-section" poster={preview} controls>
              <source src={bgvideo.publicURL} type="video/mp4"/>
          </video>
        </div>
      </section>
    </>
  )
}

export default SeccionVideo
