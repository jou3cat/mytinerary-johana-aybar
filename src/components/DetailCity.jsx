import React from 'react';
import { Link as Anchor } from 'react-router-dom';

const DetailsCity = ({ city }) => {
  if (!city) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <div className="w-full mb-4 sm:mb-0 flex justify-center">
      <div
        className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-xl flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${city.photo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center bg-gray-400 bg-opacity-70 p-4 rounded-md">
          <h2 className="font-semibold text-2xl text-white mb-2">{city.city}</h2>
          <p className="text-white text-base w-11/12 md:w-7/12 mx-auto">Description: {city.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Anchor
            to={`/itineraries/${city.city}`}
            className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
          >
            View Itineraries
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default DetailsCity;
