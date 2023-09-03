import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Itineraries() {
  const { city_id } = useParams();
  const [itineraryData, setItineraryData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los itinerarios de la ciudad
    axios.get(`http://localhost:8080/api/itineraries?city_id=${city_id}`)
      .then(response => {
        setItineraryData(response.data.response); // Establece los datos de los itinerarios en el estado
      })
      .catch(error => {
        console.error('Error:', error);
        setItineraryData([]); // Maneja el caso de error asignando un arreglo vacío
      });
  }, [city_id]);

  if (!itineraryData.length) {
    return <div className='text-white'>Loading...</div>;
  }


  // Filtrar itinerarios por city_id
  const filteredItineraries = itineraryData.filter(itinerary => itinerary.city_id === city_id);

  return (
    <div className='text-white'>
      <h2>Itineraries for {city_id}</h2>
      <ul>
        {filteredItineraries.map((itinerary, index) => (
          <li key={index}>
            <h3>{itinerary.name}</h3>
            <p>Price: {itinerary.price}</p>
            <p>Duration: {itinerary.duration} minutes</p>
            {/* Agrega más detalles aquí si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
}

//   return (
//     <div className='text-white'>
//       <h2>Itineraries for {city_id}</h2>
//       <ul>
//         {itineraryData.map((itinerary, index) => (
//           <li key={index}>
//             <h3>{itinerary.name}</h3>
//             <p>Price: {itinerary.price}</p>
//             <p>Duration: {itinerary.duration} minutes</p>
//             {/* Agrega más detalles aquí si es necesario */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Link as Anchor } from 'react-router-dom';

// export default function Itineraries() {
//   const { itinerary_id } = useParams();
//   const [itineraryData, setItineraryData] = useState(null);

//   useEffect(() => {
//     // Realiza una solicitud al servidor para obtener los datos de la ciudad por _id
//     console.log(itinerary_id)
//     axios.get(`http://localhost:8080/api/itineraries?city_id=${itinerary_id}`)
//       .then(response => {
//         console.log(response.data);
//         setItineraryData(response.data); // Establece los datos de la ciudad en el estado
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         setItineraryData(null); // Maneja el caso de error
//       });
//   }, [itinerary_id]);

//   if (!itineraryData) {
//     return <div className='text-white'>Loading...</div>;
//   }

//   return (
//     <>
//    <div className='text-white'>
//     <h2>{itineraryData.response.name}</h2>
//     <p>City: {itineraryData.response.city_id}</p>
//     <p>Price: {itineraryData.response.price}</p>
//     <p>Duration: {itineraryData.response.duration}</p>
//     {/* <p>tags: {itineraryData.response.tags}</p>
//     <img src={itineraryData.response.photo} alt={itineraryData.response.photo} /> 
//      */}
//     {/* Otros detalles de la ciudad */}
//   </div>


//     </>
//   );
// }