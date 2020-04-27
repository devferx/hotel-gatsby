import React from "react"
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import ImagenHotel from '../components/ImagenHotel.jsx'
import ContenidoInicio from "../components/ContenidoInicio"
import useHabitaciones from '../hooks/useHabitaciones'
import HabitacionPreview from "../components/HabitacionPreview"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const habitaciones = useHabitaciones();
  return (
    <Layout>
      <ImagenHotel/>
      <ContenidoInicio/>
      <h2
        css={css`
          text-align:center;
          margin-top: 5rem;
          font-size: 3rem;
        `}>Nuestras habitaciones
      </h2>
      <ListadoHabitaciones>
        {
          habitaciones.map(habitacion => (
            <HabitacionPreview
              key={habitacion.id}
              {...habitacion} />
          ))
        }
      </ListadoHabitaciones>
    </Layout>
  )
}

export default IndexPage