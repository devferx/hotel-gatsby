import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const ContenidoInicio = () => {
  const {allDatoCmsPagina:{nodes: [pagina]}} = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const {titulo, contenido , imagen: {fluid}} = pagina

  return (
    <section>
      <h2
        css={
          css`
            text-align:center;
            font-size: 4rem;
            margin-top: 4rem;

            p{
              line-height: 2;
            }
          `
        }
        >{titulo}</h2>
      <TextoInicio>
        <p>{contenido}</p>
        <Image fluid={fluid} />
      </TextoInicio>
    </section>
  )
}

export default ContenidoInicio
