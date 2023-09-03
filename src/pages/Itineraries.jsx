import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link as Anchor} from 'react-router-dom';

export default function Itineraries() {
  const { city_id } = useParams();
  const [itineraryData, setItineraryData] = useState([]);
  
    const [detailsVisible, setDetailsVisible] = useState(false);
  

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los itinerarios de la ciudad
    axios.get(`http://localhost:8080/api/itineraries?city_id=${city_id}`)
      .then(response => {
        setItineraryData(response.data.response); // Establece los datos de los itinerarios en el estado
     


        const visibilityState = {};
        response.data.response.forEach((itinerary, index) => {
          visibilityState[index] = true;
        });
        setDetailsVisible(visibilityState);


     
      })
      .catch(error => {
        console.error('Error:', error);
        setItineraryData([]); // Maneja el caso de error asignando un arreglo vacío
      });
  }, [city_id]);

  const toggleDetails = (index) => {
    // Cambia el estado de visibilidad de la tarjeta correspondiente al índice dado
    setDetailsVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Filtrar itinerarios por city_id
  const filteredItineraries = itineraryData.filter(itinerary => itinerary.city_id === city_id);


  if (itineraryData.length===0) {
    return (
      <div className='text-white'>
        <p>There are no itineraries</p>
      </div>
    )
  } else{
   
    return (
      <div  >
     
      <div className="text-black flex flex-col justify-center items-center h-auto p-8">
        {filteredItineraries.length > 0 ? (
          <>
            <h2 className='text-white text-3xl font-bold p-6'> Itineraries of {city_id}</h2>
            <ul>
              {filteredItineraries.map((itinerary, index) => (
                <div
                  key={index}
                  className=" relative bg-white justify-center border rounded-lg p-8 m-2 max-w-xl "
                > 
                 <div>
                 <h3 className="text-lg font-semibold mt-2 text-center">
                    {itinerary.name}
                  </h3>
                  <img
                    src={itinerary.photo}
                    alt={itinerary.name}
                    className="max-w-full h-auto"
                  />
                 
                



                  <div className= {`mt-4 text-center ${detailsVisible ? 'block' : 'hidden'}`} >
                  
                  <div className='flex justify-between'>
                    <div className='flex  flex-wrap'>
                    {/* Corazon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    <p className='text-xs self-center'></p>
                    </div>

                    <div>
                    {/* Boton flecha */}
                    <button
                      className="text-blue-500 hover:underline focus:outline-none"
                      //onClick={() => setDetailsVisible(!detailsVisible)}
                      onClick={() => toggleDetails(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    </div>
                    </div>
                    
                    </div>
                  </div>

                  {detailsVisible[index] && (
                    <div>

                    <div className="mt-2 flex justify-between">
                       <div className='flex flex-col'>
                        <p>User:</p>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </div>

                        <div className='flex flex-col'>
                      <p className="text-gray-600">Hashtag:</p>
                       <span className="text-black font-semibold">{itinerary.tags.join(', ')}</span>
                      </div>

                      <div className='flex flex-col'>
                      <p className="text-gray-600">Duration:</p>
                     <span className="text-black font-semibold">{itinerary.duration} minutes</span>
                      </div>
                  
                       
                       <div  className='flex flex-col'>
                      <p className="text-gray-600">Price: </p>
                      <span className="text-black font-semibold flex flex-wrap">{itinerary.price} <p> usd</p></span>
                      </div>

                      
                    </div>

                    <div className="px-8 pt-4 pb-2 p-6 flex items-center justify-center">
      <Anchor to='/activities' className='inline-block bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2'>View More</Anchor>
      </div>
                    </div>
                  )
                  
                  }


      </div>
                
              ))}
            </ul>
            
            <div className="px-8 pt-4 pb-2 p-6 flex items-center">
            <Anchor to='/activities' className='inline-block bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2 justify-center'>View More</Anchor>
            </div>

          </>
        ) : (
          <p>There are no itineraries</p>
        )}
      </div>
      </div>


    
    );


    
  }

}
