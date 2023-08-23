import { useParams } from 'react-router-dom'

export default function CityDetails() {
  
    const { city_id } = useParams()
  //este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL. Este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador y donde cada VALOR es el valor de la URL
  return (
    <div>CityDetails of city {city_id} in construction</div>
  )
}