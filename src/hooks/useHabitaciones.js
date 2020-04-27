import {useStaticQuery, graphql} from 'gatsby'

const useHabitaciones = () => {
  const {allDatoCmsHabitacion:{nodes:habitaciones}} = useStaticQuery(graphql`
    query{
    allDatoCmsHabitacion{
      nodes{
        titulo
        id
        slug
        contenido
        imagen {
          fluid(maxWidth: 1200){
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
  `)
  return habitaciones.map(({
    titulo,
    id,
    contenido,
    imagen,
    slug
    }) => ({
     titulo,
     id,
     contenido,
     imagen,
     slug
  }))
}

export default useHabitaciones;