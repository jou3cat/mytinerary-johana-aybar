import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link as Anchor } from 'react-router-dom';

export default function CityDetails() {
  const { city_id } = useParams();
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los datos de la ciudad por _id
    console.log(city_id)
    axios.get(`http://localhost:8080/api/cities/${city_id}`)
      .then(response => {
        console.log(response.data);
        setCityData(response.data); // Establece los datos de la ciudad en el estado
      })
      .catch(error => {
        console.error('Error:', error);
        setCityData(null); // Maneja el caso de error
      });
  }, [city_id]);

  if (!cityData) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <>
<div className="w-full mb-4 sm:mb-0 flex justify-center">
  <div
    className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-xl flex flex-col justify-center items-center"
    style={{
      backgroundImage: `url(${cityData.response.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="text-center bg-gray-400 bg-opacity-70 p-4 rounded-md">
      <h2 className="font-semibold text-2xl text-white mb-2">
        {cityData.response.city}
      </h2>
      <p className="text-white text-base w-11/12 md:w-7/12 mx-auto">
        Description: {cityData.response.description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <Anchor
        to="/itineraries"
        className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
      >
        View Itineraries
      </Anchor>
    </div>
  </div>
</div>


          {/* <div className="items-center w-full sm:w-3/12 mb-4 sm:mb-0">
  <div className="max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-xl">
    <div className="px-6 py-4">
      <h2 className="font-semibold text-2xl text-white mb-2">{cityData.response.city}</h2>
      <p className="text-gray-400 text-base">
      Description: {cityData.response.description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <Anchor to='/itineraries' className='inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>View Itineraries</Anchor>
    </div>
  </div>
</div>
<img src={cityData.response.photo} alt={cityData.response.city} /> */}


{/* <div className='text-white'>
    <h2>{cityData.response.city}</h2>
    <p>Country: {cityData.response.country}</p>
    <p>Population: {cityData.response.population}</p>
    <p>Description: {cityData.response.description}</p>
    <img src={cityData.response.photo} alt={cityData.response.city} />
    
  </div> */}
    
    </>
  );
}

