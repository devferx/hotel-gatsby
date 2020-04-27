import React from 'react'
import {graphql} from 'gatsby';
import Img from 'gatsby-image'
import Layout from './Layout'
import {css} from '@emotion/core'

export const query = graphql`
  query($slug: String!){
    allDatoCmsHabitacion(filter: {slug: {eq:$slug}}) {
      nodes {
        titulo
        contenido
        imagen{
          fluid(maxWidth: 1200){
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const HabitacionTemplate = ({data:{allDatoCmsHabitacion:{nodes: [habitacion]}}}) => {
  const {titulo, contenido, imagen} = habitacion;
  return (
    <Layout>
    <main
      css={css`
        margin: 0 auto;
        max-width: 1200px;
        width: 95%;
      `}>
      <h1
        css={css`
          text-align: center;
          margin-top: 4rem;
        `}>{titulo}</h1>
      <p>{contenido}</p>
      <Img fluid={imagen.fluid}/>
    </main>
    </Layout>
  )
}

export default HabitacionTemplate
